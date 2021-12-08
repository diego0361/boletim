import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
}
export default Student;