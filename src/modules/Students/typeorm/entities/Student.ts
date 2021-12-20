import Note from '../../../Notes/typeorm/entities/Note'
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('students')
class Student {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    sex: string;

    @Column()
    registration: string

    @Column()
    age: number

    @OneToMany(() => Note, Notes => Notes.id_student)
    @JoinColumn({name: 'notes'})
    notes: Note;

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
}
export default Student;