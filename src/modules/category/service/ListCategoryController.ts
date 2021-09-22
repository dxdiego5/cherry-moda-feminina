import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoryService } from "./ListCategoryService";


class ListCategoryController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listCategoryService = container.resolve(ListCategoryService);
        const categorys = await listCategoryService.execute();

        return res.status(201).json(categorys);
    }

}

export { ListCategoryController }