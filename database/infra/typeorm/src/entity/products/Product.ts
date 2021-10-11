import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../categorys/Category';

@Entity('products')
class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    product_name: string;

    @Column({ nullable: true })
    code!: string;

    @Column({ nullable: true })
    bar_code!: string;

    @Column({ nullable: true })
    size!: string;

    @Column({ nullable: true })
    quantity!: number;

    @Column({ type: 'double precision' })
    cost: number;

    @Column({ type: 'double precision' })
    price: number;

    @Column({ nullable: true })
    url_img!: string;

    @Column()
    status: string;

    @ManyToOne((type) => Category, { eager: true })
    @JoinColumn()
    category: Category;

    @Column({ nullable: true })
    storage_type: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    length: number;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        // Activate status value default
        this.status = 'active';
    }
}

export { Product };
