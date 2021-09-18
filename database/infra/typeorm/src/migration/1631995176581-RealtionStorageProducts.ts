import {MigrationInterface, QueryRunner} from "typeorm";

export class RealtionStorageProducts1631995176581 implements MigrationInterface {
    name = 'RealtionStorageProducts1631995176581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "storages_products_storage_type_enum" AS ENUM('input', 'output', 'ghost')`);
        await queryRunner.query(`CREATE TABLE "storages_products" ("id" character varying NOT NULL, "storage_type" "storages_products_storage_type_enum" NOT NULL DEFAULT 'ghost', "quantity" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "id_product" character varying, "id_user" character varying, CONSTRAINT "REL_2418fb82e26dea9fe5d519850e" UNIQUE ("id_product"), CONSTRAINT "REL_adedaa87edc41fa1f77d637883" UNIQUE ("id_user"), CONSTRAINT "PK_9042bec1d6978f60070ad6ee633" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "storages_products" ADD CONSTRAINT "FK_2418fb82e26dea9fe5d519850e4" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "storages_products" ADD CONSTRAINT "FK_adedaa87edc41fa1f77d637883b" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "storages_products" DROP CONSTRAINT "FK_adedaa87edc41fa1f77d637883b"`);
        await queryRunner.query(`ALTER TABLE "storages_products" DROP CONSTRAINT "FK_2418fb82e26dea9fe5d519850e4"`);
        await queryRunner.query(`DROP TABLE "storages_products"`);
        await queryRunner.query(`DROP TYPE "storages_products_storage_type_enum"`);
    }

}
