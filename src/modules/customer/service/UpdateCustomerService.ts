import { inject, injectable } from 'tsyringe';
import { enumStatusType } from '../../../config/enunsTypes/StatusType';
import { AppError } from '../../../config/errors/AppError';
import messageCustomer from '../../../config/messages/messageCustomer';
import { ICustomerRepository } from '../repository/ICustomerRepository';

@injectable()
class UpdateCustomerService {
    constructor(
        @inject('CustomerRepository')
        private customerRepository: ICustomerRepository
    ) {}

    async execute({ id, name, email, address, phone, status }) {
        const customer = await this.customerRepository.findByCustomerId(id);

        if (!customer) {
            throw new AppError(
                messageCustomer().ERROR.customerNotExists['message'],
                401
            );
        }

        //check status of customer exists
        switch (status) {
            case enumStatusType.ACTIVE:
                break;
            case enumStatusType.INACTIVE:
                break;
            default:
                throw new AppError(
                    messageCustomer().ERROR.statusIncorrect['message']
                );
        }

        customer.name = name;
        customer.address = address;
        customer.phone = phone;
        customer.email = email;
        customer.status = status;
        customer.updated_at = new Date();

        return await this.customerRepository.update(customer);
    }
}

export { UpdateCustomerService };
