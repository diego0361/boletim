import Teacher from "../../../Teachers/typeorm/entities/Teacher";
import Student from "../../../Students/typeorm/entities/Student";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('note')
class Note {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    value: number

    @Column()
    description: string

    @ManyToOne(() => Teacher, teacher => teacher.notes)
    @JoinColumn({ name: 'id_teacher' })
    id_teacher: Teacher

    @ManyToOne(() => Student, student => student.notes)
    @JoinColumn({ name: 'id_student' })
    id_student: Student

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default Note;