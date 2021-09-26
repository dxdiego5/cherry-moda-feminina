import { Request, Response } from "express";
import { container } from "tsyringe";
import messageCategory from "../../../config/messages/messageCategory";
import { ListCategoryService } from "./ListCategoryService";

class ListCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listCategoryService = container.resolve(ListCategoryService);
        const categorys = await listCategoryService.execute();

        //if not found categorys not registered
        if (categorys.length <= 0) {
            return res.status(201).json(messageCategory().ALERT.categoryNotFound);
        }

        return res.status(201).json(categorys);
    }

}

export { ListCategoryController }