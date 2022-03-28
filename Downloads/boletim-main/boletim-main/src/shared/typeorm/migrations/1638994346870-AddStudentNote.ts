import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddStudentNote1638994346870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('student', new TableForeignKey({
            name: 'NotesStudent',
            columnNames: ['notes'],
            referencedColumnNames: ['id'],
            referencedTableName: 'notes',
            onDelete: 'SET NULL'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('students', 'NotesStudent')
    }

}
