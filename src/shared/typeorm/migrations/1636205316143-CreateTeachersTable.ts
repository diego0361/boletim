import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeachersTable1636205316143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ 
                name: 'teachers',
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
                        name: 'age',
                        type: 'integer'
                    },
                    {
                        name: 'discipline',
                        type: 'varchar'
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
        await queryRunner.dropTable('teachers')
    }

}
