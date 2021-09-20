import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAndSaveClientService } from "./CreateAndSaveClientService";


class CreateAndSaveClientController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { name, email, cpf, address, tel } = req.body;

        const createAndSaveClientService = container.resolve(CreateAndSaveClientService);
        await createAndSaveClientService.execute({ name, email, cpf, address, tel });

        return res.status(201).send({ message: "Cliente registrado com sucesso !" });
    }


}


export { CreateAndSaveClientController }