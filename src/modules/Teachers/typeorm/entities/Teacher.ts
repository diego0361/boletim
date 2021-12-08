import Note from '../../../Notes/typeorm/entities/Note'
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('teachers')
class Teacher {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    age: number

    @Column()
    discipline: string

    @OneToMany(() => Note, Notes => Notes.id_teacher)
    @JoinColumn({name: 'notes'})
    notes: Note;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;
}

export default Teacher;