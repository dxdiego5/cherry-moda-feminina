import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageCustomer from '../../../config/messages/messageCustomer';
import { ListCustomerService } from './ListCustomerService';

class ListCustomerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCustomerService = container.resolve(ListCustomerService);
        const customers = await listCustomerService.execute();

        //if not found customer not registered
        if (customers.length <= 0) {
            return res
                .status(201)
                .json(messageCustomer().ALERT.customerNotFound);
        }

        //else return list customer
        return res.status(201).json(customers);
    }
}

export { ListCustomerController };
