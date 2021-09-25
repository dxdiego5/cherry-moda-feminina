import { Request, Response } from "express";
import { container } from "tsyringe";
import messageCustomer from "../../../config/messages/messageCustomer";
import { UpdateCustomerService } from "./UpdateCustomerService";

class UpdateCustomerController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id, name, email, address, tel, status } = req.body;

        const updateCustomerService = container.resolve(UpdateCustomerService);
        await updateCustomerService.execute({ id, name, email, address, tel, status });

        return res.status(201).send(messageCustomer().SUCCESS.update);
    }
}

export { UpdateCustomerController }