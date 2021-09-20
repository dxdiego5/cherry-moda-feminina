import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import { ListClientService } from "./ListClientService";

class ListClientController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listClientService = container.resolve(ListClientService);
        const clients = await listClientService.execute();

        return res.status(201).json(clients);
    }

}

export { ListClientController }