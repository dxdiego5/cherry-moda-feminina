import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('customers')
class Customer {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    cpf!: string;

    @Column()
    address!: string;

    @Column()
    birth_date: Date;

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

export { Customer };
