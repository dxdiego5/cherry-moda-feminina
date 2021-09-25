import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class customers1631838547306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "customers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "phone",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "address",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: 'birth_date',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: "status",
                        type: "varchar",
                        default: "active"
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
