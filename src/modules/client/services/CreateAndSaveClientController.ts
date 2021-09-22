import { Request, Response } from "express";
import { container } from "tsyringe";
import messageClient from "../../../config/messages/messageClient";
import { CreateAndSaveClientService } from "./CreateAndSaveClientService";


class CreateAndSaveClientController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { name, email, cpf, address, tel } = req.body;

        const createAndSaveClientService = container.resolve(CreateAndSaveClientService);
        await createAndSaveClientService.execute({ name, email, cpf, address, tel });

        return res.status(201).send(messageClient().SUCCESS.create);
    }


}


export { CreateAndSaveClientController }