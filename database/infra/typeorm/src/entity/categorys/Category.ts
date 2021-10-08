import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('categorys')
class Category {
    @PrimaryColumn()
    id: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        // Activate status default
        this.status = 'active';
    }
}

export { Category };
