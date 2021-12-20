import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddNotesStudent1638993984212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('notes', new TableForeignKey({
            name: 'StudentNotes',
            columnNames: ['id_student'],
            referencedColumnNames: ['id'],
            referencedTableName: 'students',
            onDelete: 'SET NULL'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('notes', 'StudentNotes')
    }

}
