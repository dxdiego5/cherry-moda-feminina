import { Entity, Column, PrimaryColumn, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../categorys/Category";

@Entity("products")
class Product {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column({ nullable: true })
    code!: string;

    @Column({ nullable: true })
    bar_code!: string;

    @Column({ type: "double precision" })
    amount: number;

    @Column({ nullable: true })
    url_img!: string;

    @Column()
    status: number;

    @OneToOne(() => Category)
    @JoinColumn({ name: "id_category" })
    categoryId: Category;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        // Activate status default
        this.status = 1
    }
}

export { Product }