import { Request, Response } from 'express';
import { container } from 'tsyringe';
import messageCategory from '../../../config/messages/messageCategory';
import { CreateAndSaveCategoryService } from './CreateAndSaveCategoryService';

class CreateAndSaveCategoryController {

    async handle(req: Request, res: Response) {

        const description = req.body;

        const createAndSaveCategoryService = container.resolve(CreateAndSaveCategoryService);
        const category = await createAndSaveCategoryService.execute(description);

        return res.status(201).json(messageCategory().SUCCESS.create);
    }

}


export { CreateAndSaveCategoryController }