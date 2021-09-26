import {MigrationInterface, QueryRunner} from "typeorm";

export class RealtionProductAndCategory1632615786149 implements MigrationInterface {
    name = 'RealtionProductAndCategory1632615786149'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" character varying NOT NULL, "product_name" character varying NOT NULL, "code" character varying, "bar_code" character varying, "size" character varying, "quantity" integer, "cost" double precision NOT NULL, "price" double precision NOT NULL, "url_img" character varying, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_category" character varying, CONSTRAINT "REL_0633fb8c8bf00bb25890f4b2ae" UNIQUE ("id_category"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" DROP CONSTRAINT "PK_806896a0a29595c702235036597"`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" ADD CONSTRAINT "PK_806896a0a29595c702235036597" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."customers" DROP CONSTRAINT "PK_133ec679a801fab5e070f73d3ea"`);
        await queryRunner.query(`ALTER TABLE "public"."customers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ADD CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "cpf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."users" ALTER COLUMN "isAdmin" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_0633fb8c8bf00bb25890f4b2ae2" FOREIGN KEY ("id_category") REFERENCES "categorys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_0633fb8c8bf00bb25890f4b2ae2"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ALTER COLUMN "isAdmin" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "cpf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" DROP CONSTRAINT "PK_133ec679a801fab5e070f73d3ea"`);
        await queryRunner.query(`ALTER TABLE "public"."customers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."customers" ADD CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" DROP CONSTRAINT "PK_806896a0a29595c702235036597"`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."categorys" ADD CONSTRAINT "PK_806896a0a29595c702235036597" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
