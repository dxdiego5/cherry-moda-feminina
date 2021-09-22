import { Request, Response } from "express";
import messageCategory from "../../../config/messages/messageCategory";


class ListCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {


        return res.status(201).send(messageCategory().SUCCESS.create);
    }

}


export { ListCategoryController }