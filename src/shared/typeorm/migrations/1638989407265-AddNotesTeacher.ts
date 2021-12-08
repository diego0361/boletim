import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddNotesTeacher1638989407265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('notes', new TableForeignKey({
            name: 'TeacherNotes',
            columnNames: ['id_teacher'],
            referencedColumnNames: ['id'],
            referencedTableName: 'teachers',
            onDelete: 'SET NULL'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('notes', 'TeacherNotes')
    }

}
