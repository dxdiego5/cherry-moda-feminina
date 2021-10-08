import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageProduct from '../../../config/messages/messageProduct';
import { ICreateProductDTO } from '../../DTOs/ICreateProductDTO';
import { UpdateProductService } from './UpdateProductService';

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
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
        }: ICreateProductDTO = req.body;

        const updateProductService = container.resolve(UpdateProductService);
        const product = await updateProductService.execute({
            id,
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

        return res.status(201).json(messageProduct().SUCCESS.update);
    }
}

export { UpdateProductController };
