import { getRepository, Repository } from "typeorm";
import { Client } from "../../../../../database/infra/typeorm/src/entity/clients/Client";
import { ICreateClientDTO } from "../../../DTOs/ICreateClientDTO";
import { IClientRepository } from "../IClientRepository";

class ClientRepository implements IClientRepository {

    private repository: Repository<Client>;

    constructor() {
        // start repository client
        this.repository = getRepository(Client);
    }

    /**
     * searching client exits register with cpf or email
     */
    async findByClientExists({ email, cpf }): Promise<Client[]> {
        const client = await this.repository.find({
            where: [{ email: email }, { cpf: cpf }],
        });
        return client;
    }

    /**
     * list all clients
     */
    async listAllClient(): Promise<Client[]> {
        return await this.repository.find();
    }

    /**
     * creating client and then saving to database
     */
    async createAndSave({ name, tel, email, cpf, address }: ICreateClientDTO): Promise<void> {
        const client = this.repository.create({ name, tel, email, cpf, address });
        await this.repository.save(client);
    }
}

export { ClientRepository }