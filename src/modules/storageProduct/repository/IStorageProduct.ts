import { StorageProduct } from '../../../../database/infra/typeorm/src/entity/storages/StorageProduct';
import { ICreateStorageProductDTO } from '../../DTOs/ICreateStorageProductDTO';

interface IStorageProduct {
    createAndSave({
        storage_type,
        quantity,
        product,
        user,
    }: ICreateStorageProductDTO): Promise<StorageProduct>;
}

export { IStorageProduct };
