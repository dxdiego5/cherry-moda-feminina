import { MigrationInterface, QueryRunner } from "typeorm";

export class RealtionProductAndCategory1631960479776 implements MigrationInterface {
    name = 'RealtionProductAndCategory1631960479776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" character varying NOT NULL, "name" character varying NOT NULL, "code" character varying, "bar_code" character varying, "amount" DOUBLE PRECISION NOT NULL, "url_img" character varying, "status" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "id_category" character varying, CONSTRAINT "REL_0633fb8c8bf00bb25890f4b2ae" UNIQUE ("id_category"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_0633fb8c8bf00bb25890f4b2ae2" FOREIGN KEY ("id_category") REFERENCES "categorys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_0633fb8c8bf00bb25890f4b2ae2"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
