import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Product } from "../products/Product";
import { User } from "../users/User";

export enum storageType {
    INPUT = "input",
    OUTPUT = "output",
    GHOST = "ghost"
}

@Entity("storages_products")
class StorageProduct {

    @PrimaryColumn()
    id: string;

    @OneToOne(() => Product)
    @JoinColumn({ name: "id_product" })
    productId: Product;

    @OneToOne(() => User)
    @JoinColumn({ name: "id_user" })
    userId: User;

    @Column({
        type: "enum",
        enum: storageType,
        default: storageType.GHOST
    })
    storage_type: storageType; // input or output do product

    @Column()
    quantity: number;

    @CreateDateColumn()
    created_at: Date;
    storageProduct: User[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { StorageProduct }