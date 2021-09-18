import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clients")
class Client {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    tel!: string;

    @Column()
    email!: string;

    @Column()
    cpf!: string;

    @Column()
    address!: string;

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

export { Client }