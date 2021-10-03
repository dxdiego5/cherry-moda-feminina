import { Response, Request } from "express";
import { container } from "tsyringe";
import messageProduct from "../../../config/messages/messageProduct";
import { ListAllProductService } from "./ListAllProductService";

class ListAllProductController {

    async handle(req: Request, res: Response) {

        const listAllProductService = container.resolve(ListAllProductService);
        const products = await listAllProductService.execute();

        if (products.length <= 0) {
            return res.status(201).json(messageProduct().ERROR.ProductNotFound);
        }

        return res.status(201).json(products);
    }
}

export { ListAllProductController }