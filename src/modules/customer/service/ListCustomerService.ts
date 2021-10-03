import { inject, injectable } from "tsyringe";
import { Customer } from "../../../../database/infra/typeorm/src/entity/customers/Customer";
import { ICustomerRepository } from "../repository/ICustomerRepository";

@injectable()
class ListCustomerService {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) { }

    async execute(): Promise<Customer[]> {
        const customers = await this.customerRepository.listAllCustomer();
        return customers;
    }
}

export { ListCustomerService }