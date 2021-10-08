/*import { Entity, Column, PrimaryColumn, CreateDateColumn, JoinColumn, OneToOne, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { enumStorageType } from "../../../../../../src/config/enumsTypes/EnumTypeStatus";
import { Product } from "../products/Product";
import { User } from "../users/User";


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
        enum: enumStorageType,
        default: enumStorageType.GHOST
    })
    storage_type: enumStorageType;

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

export { StorageProduct }*/
