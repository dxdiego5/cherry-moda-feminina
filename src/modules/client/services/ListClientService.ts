import { inject, injectable } from "tsyringe";
import { Client } from "../../../../database/infra/typeorm/src/entity/clients/Client";
import { IClientRepository } from "../repository/IClientRepository";

@injectable()
class ListClientService {
    constructor(
        @inject('ClientRepository')
        private clientRepository: IClientRepository
    ) { }

    async execute(): Promise<Client[]> {
        const clients = await this.clientRepository.listAllClient();
        return clients;
    }
}

export { ListClientService }