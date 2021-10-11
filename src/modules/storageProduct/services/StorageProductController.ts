import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { User } from '../../../../database/infra/typeorm/src/entity/users/User';
import messageStorageProduct from '../../../config/messages/messageStorageProduct';
import { StorageProductService } from './StorageProductService';

class StorageProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        //user fake instance ID
        const user = new User();
        user.id = '1c42613f-6799-4a63-8805-ee434cc1c58b';

        const { storage_type, product, quantity } = req.body;

        const storageProductService = container.resolve(StorageProductService);
        const storageProduct = await storageProductService.execute({
            storage_type,
            quantity,
            product,
            user,
        });

        return res.status(201).json(messageStorageProduct().SUCCESS.create);
    }
}

export { StorageProductController };
