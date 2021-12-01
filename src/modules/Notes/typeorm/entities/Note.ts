import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('note')
class Note {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    value: number

    @Column()
    description: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    update_at: string
}
export default Note;