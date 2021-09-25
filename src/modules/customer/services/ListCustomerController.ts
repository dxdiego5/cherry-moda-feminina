import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCustomerService } from "./ListCustomerService";

class ListCustomerController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listCustomerService = container.resolve(ListCustomerService);
        const customers = await listCustomerService.execute();

        return res.status(201).json(customers);
    }

}

export { ListCustomerController }