import {MigrationInterface, QueryRunner} from "typeorm";

export class RealtionStorageProductsAndAddCollunmStorageTypeProduct1633873182111 implements MigrationInterface {
    name = 'RealtionStorageProductsAndAddCollunmStorageTypeProduct1633873182111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "storage_type"`);
        await queryRunner.query(`DROP TYPE "public"."products_storage_type_enum"`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "storage_type" character varying`);
        await queryRunner.query(`ALTER TABLE "public"."storages_products" DROP COLUMN "storage_type"`);
        await queryRunner.query(`DROP TYPE "public"."storages_products_storage_type_enum"`);
        await queryRunner.query(`ALTER TABLE "public"."storages_products" ADD "storage_type" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."storages_products" DROP COLUMN "storage_type"`);
        await queryRunner.query(`CREATE TYPE "public"."storages_products_storage_type_enum" AS ENUM('input', 'input_create', 'output', 'ghost', 'sold_out')`);
        await queryRunner.query(`ALTER TABLE "public"."storages_products" ADD "storage_type" "public"."storages_products_storage_type_enum"`);
        await queryRunner.query(`ALTER TABLE "public"."products" DROP COLUMN "storage_type"`);
        await queryRunner.query(`CREATE TYPE "public"."products_storage_type_enum" AS ENUM('input', 'input_create', 'output', 'ghost', 'sold_out')`);
        await queryRunner.query(`ALTER TABLE "public"."products" ADD "storage_type" "public"."products_storage_type_enum"`);
    }

}
