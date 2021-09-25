import { Request, Response } from "express";
import { container } from "tsyringe";
import messageCustomer from "../../../config/messages/messageCustomer";
import { CreateAndSaveCustomerService } from "./CreateAndSaveCustomerService";


class CreateAndSaveCustomerController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { name, email, cpf, address, phone } = req.body;

        const createAndSaveCustomerService = container.resolve(CreateAndSaveCustomerService);
        await createAndSaveCustomerService.execute({ name, email, cpf, address, phone });

        return res.status(201).send(messageCustomer().SUCCESS.create);
    }


}


export { CreateAndSaveCustomerController }