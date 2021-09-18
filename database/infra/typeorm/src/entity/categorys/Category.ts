import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("categorys")
class Category {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    status: number;

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

export { Category }