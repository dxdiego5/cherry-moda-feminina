import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { ValidateCPF } from "../../../config/functions/ValidateCPF";
import { validate } from 'gerador-validador-cpf'
import messageCustomer from "../../../config/messages/messageCustomer";
import { ICustomerRepository } from "../repository/ICustomerRepository";
import { ICreateCustomerDTO } from "../../DTOs/ICreateCustomerDTO";

@injectable()
class CreateAndSaveCustomerService {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ) { }

    async execute({ name, email, tel, address, cpf }: ICreateCustomerDTO): Promise<void> {

        // valid CPF reality exists
        if (!validate(cpf)) {
            throw new AppError(messageCustomer().ERROR.cpfIvalid["message"], 401);
        } else {
            cpf = await ValidateCPF(cpf); //cleaning cpf for saved
        }

        // validate customer exists
        const clientExists = await this.customerRepository.findByCustomerExists({ email, cpf });
        if (clientExists.length > 0) {
            throw new AppError(messageCustomer().ALERT.customerExists["message"], 401);
        }

        return await this.customerRepository.createAndSave({ name, tel, email, cpf, address });
    }
}

export { CreateAndSaveCustomerService }