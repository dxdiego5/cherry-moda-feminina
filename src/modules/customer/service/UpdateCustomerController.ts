import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageCustomer from '../../../config/messages/messageCustomer';
import { UpdateCustomerService } from './UpdateCustomerService';

class UpdateCustomerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, address, phone, status } = req.body;
        const { id } = req.params;

        const updateCustomerService = container.resolve(UpdateCustomerService);
        await updateCustomerService.execute({
            id,
            name,
            email,
            address,
            phone,
            status,
        });

        return res.status(201).send(messageCustomer().SUCCESS.update);
    }
}

export { UpdateCustomerController };
