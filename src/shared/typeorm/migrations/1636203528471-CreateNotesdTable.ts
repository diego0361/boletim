import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGradesTable1636203528471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'note',
                columns: [
                    {
                        name: 'id',
                        type: 'bigserial',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'value',
                        type: 'decimal',
                        precision: 4,
                        scale: 2    
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'id_teacher',
                        type: 'bigint'
                    },
                    {
                        name: 'id_student',
                        type: 'bigint'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'update_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes')
    }

}
