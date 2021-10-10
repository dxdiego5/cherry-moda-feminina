import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageProduct from '../../../config/messages/messageProduct';
import { CreateAndSaveProductService } from './CreateAndSaveProductService';

class CreateAndSaveProductController {
    async handle(req: Request, res: Response) {
        const {
            product_name,
            code,
            bar_code,
            size,
            cost,
            price,
            url_img,
            status,
            category,
        } = req.body;

        const createAndSaveProductService = container.resolve(
            CreateAndSaveProductService
        );
        const product = await createAndSaveProductService.execute({
            product_name,
            code,
            bar_code,
            size,
            cost,
            price,
            url_img,
            status,
            category,
        });

        return res.status(201).json(messageProduct().SUCCESS.create);
    }
}

export { CreateAndSaveProductController };
