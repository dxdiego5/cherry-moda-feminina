import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { IClientRepository } from "../repository/IClientRepository";


@injectable()
class UpdateClientService {

    constructor(

        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute({ id, name, email, address, tel, status }) {

        const client = await this.clientRepository.findByClientId(id);

        if (!client) {
            throw new AppError("Cliente náo existe !", 401);
        }

        client.name = name;
        client.address = address;
        client.tel = tel;
        client.email = email;
        client.status = status;

        return await this.clientRepository.update(client);
    }

}



export { UpdateClientService }