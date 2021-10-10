import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    JoinColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Product } from '../products/Product';
import { User } from '../users/User';

@Entity('storages_products')
class StorageProduct {
    @PrimaryColumn()
    id: string;

    @ManyToOne((type) => Product, { eager: true })
    @JoinColumn()
    product: Product;

    @ManyToOne((type) => User, { eager: true })
    @JoinColumn()
    user: User;

    @Column({ nullable: true })
    storage_type: string;

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { StorageProduct };
