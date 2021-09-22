import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { ValidateCPF } from "../../../config/functions/ValidateCPF";
import { ICreateClientDTO } from "../../DTOs/ICreateClientDTO";
import { IClientRepository } from "../repository/IClientRepository";
import { validate } from 'gerador-validador-cpf'
import messageClient from "../../../config/messages/messageClient";

@injectable()
class CreateAndSaveClientService {

    constructor(
        @inject("ClientRepository")
        private clientRepository: IClientRepository
    ) { }

    async execute({ name, email, tel, address, cpf }: ICreateClientDTO): Promise<void> {

        // valid CPF reality exists
        if (!validate(cpf)) {
            throw new AppError(messageClient().ERROR.cpfIvalid["message"], 401);
        } else {
            cpf = await ValidateCPF(cpf); //cleaning cpf for saved
        }

        // validate client exists
        const clientExists = await this.clientRepository.findByClientExists({ email, cpf });
        if (clientExists.length > 0) {
            throw new AppError(messageClient().ALERT.clientExists["message"], 401);
        }

        return await this.clientRepository.createAndSave({ name, tel, email, cpf, address });
    }
}

export { CreateAndSaveClientService }