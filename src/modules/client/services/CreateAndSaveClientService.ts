import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { ValidateCPF } from "../../../config/functions/ValidateCPF";
import { ICreateClientDTO } from "../DTOs/ICreateClientDTO";
import { IClientRepository } from "../repository/IClientRepository";


@injectable()
class CreateAndSaveClientService {

    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute({ name, email, tel, address, cpf }: ICreateClientDTO): Promise<void> {

        // valid CPF reality exists
        const validCPF = await ValidateCPF(cpf);

        if (validCPF === false) {
            throw new AppError("CPF é invalido !", 401);
        } else {
            cpf = validCPF;
        }



        // validate client exists
        const clientExists = await this.clientRepository.findByClientExists({ email, cpf });
        if (clientExists.length > 0) {
            throw new AppError("Cliente já possui cadastro !", 401);
        }

        return await this.clientRepository.createAndSave({ name, tel, email, cpf, address });
    }
}

export { CreateAndSaveClientService }