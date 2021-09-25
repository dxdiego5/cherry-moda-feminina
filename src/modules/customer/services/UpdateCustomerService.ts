import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import messageCustomer from "../../../config/messages/messageCustomer";
import { ICustomerRepository } from "../repository/ICustomerRepository";


@injectable()
class UpdateCustomerService {

    constructor(

        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository
    ) { }

    async execute({ id, name, email, address, tel, status }) {

        const customer = await this.customerRepository.findByCustomerId(id);

        if (!customer) {
            throw new AppError(messageCustomer().ERROR.customerNotExists["message"], 401);
        }

        customer.name = name;
        customer.address = address;
        customer.tel = tel;
        customer.email = email;
        customer.status = status;

        return await this.customerRepository.update(customer);
    }

}

export { UpdateCustomerService }