import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddTeacherNote1638989863725 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('teacher', new TableForeignKey({
            name: 'NotesTeacher',
            columnNames: ['notes'],
            referencedColumnNames: ['id'],
            referencedTableName: 'notes',
            onDelete: 'SET NULL'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('teachers', 'NotesTeacher')
    }

}
