import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudantsTable1636203681089 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'studants',
                columns: [
                    {
                        name: 'id',
                        type: 'bigserial',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'sex',
                        type: 'varchar'
                    },
                    {
                        name: 'registration',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'age', 
                        type: 'integer',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('studants')
    }

}
