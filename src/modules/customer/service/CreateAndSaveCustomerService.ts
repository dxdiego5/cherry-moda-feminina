import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { ValidateCPF } from "../../../config/functions/ValidateCPF";
import { validate } from 'gerador-validador-cpf'
import messageCustomer from "../../../config/messages/messageCustomer";
import { ICustomerRepository } from "../repository/ICustomerRepository";
import { ICreateCustomerDTO } from "../../DTOs/ICreateCustomerDTO";

import { IDateProvider } from "../../../container/provider/DateProvider/IDateProvider";

@injectable()
class CreateAndSaveCustomerService {

    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository,

        @inject("DayJsDateProvider")
        private dateProvider: IDateProvider,
    ) { }

    async execute({ name, email, phone, address, cpf, birth_date }: ICreateCustomerDTO): Promise<void> {

        //validate Birth date customer
        var birth_date = new Date(birth_date);
        if (!this.dateProvider.dateIsValid(birth_date)) {
            throw new AppError(messageCustomer().ERROR.DateOfBirthNotValid["message"], 401);
        }

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

        return await this.customerRepository.createAndSave({ name, phone, email, cpf, address, birth_date });

    }
}

export { CreateAndSaveCustomerService }