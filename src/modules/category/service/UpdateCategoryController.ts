import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageCategory from '../../../config/messages/messageCategory';
import { UpdateCategoryService } from './UpdateCategoryService';

class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { description, status } = req.body;
        const id = req.params;

        const updateCategoryService = container.resolve(UpdateCategoryService);
        const category = await updateCategoryService.execute({
            id,
            description,
            status,
        });

        return res.status(201).json(messageCategory().SUCCESS.update);
    }
}

export { UpdateCategoryController };
