import { Request, Response } from "express";
import { container } from "tsyringe";
import messageClient from "../../../config/messages/messageClient";
import { UpdateClientService } from "./UpdateClientService";

class UpdateClientController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id, name, email, address, tel, status } = req.body;

        const updateClientService = container.resolve(UpdateClientService);
        await updateClientService.execute({ id, name, email, address, tel, status });

        return res.status(201).send(messageClient().SUCCESS.update);
    }
}

export { UpdateClientController }