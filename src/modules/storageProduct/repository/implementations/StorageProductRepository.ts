import { getRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { StorageProduct } from '../../../../../database/infra/typeorm/src/entity/storages/StorageProduct';
import { ICreateStorageProductDTO } from '../../../DTOs/ICreateStorageProductDTO';
import { IStorageProduct } from '../IStorageProduct';

class StorageProductRepository implements IStorageProduct {
    private repository: Repository<StorageProduct>;

    constructor() {
        this.repository = getRepository(StorageProduct);
    }
    async createAndSave({
        storage_type,
        quantity,
        product,
        user,
    }: ICreateStorageProductDTO): Promise<StorageProduct> {
        const storageProduct = this.repository.create({
            storage_type,
            quantity,
            product,
            user,
        });
        return await this.repository.save(storageProduct);
    }
}

export { StorageProductRepository };
