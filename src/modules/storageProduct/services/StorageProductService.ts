import { inject, injectable } from 'tsyringe';
import { enumStorageType } from '../../../config/enunsTypes/StorageType';
import { AppError } from '../../../config/errors/AppError';
import messageStorageProduct from '../../../config/messages/messageStorageProduct';
import { IProductRepository } from '../../product/repository/IProductRepository';
import { IStorageProduct } from '../repository/IStorageProduct';

@injectable()
class StorageProductService {
    constructor(
        @inject('StorageProductRepository')
        private storageProductRepository: IStorageProduct,

        @inject('ProductRepository')
        private productRepository: IProductRepository
    ) {}

    async execute({ storage_type, product, quantity, user }): Promise<void> {
        // searching product for ID
        const productInstance = await this.productRepository.findProductId(
            product.id
        );

        // verify id product exist quantity is positive or status active
        if (!productInstance || productInstance.status == 'inactive') {
            throw new AppError(
                messageStorageProduct().ERROR.StorageProductNotFound['message']
            );
        }

        /**
         * Checks the request, makes its respective validations
         * and redirects its function
         */
        switch (storage_type) {
            // situation input product
            case enumStorageType.INPUT:
                // additions quantity in stock
                productInstance.quantity += quantity;
                // product in stock now its sale
                productInstance.storage_type = enumStorageType.SALE;
                // update DATE COLUMN ROW
                productInstance.updated_at = new Date();
                break;

            // situation output product
            case enumStorageType.OUTPUT:
                // verify quantity if it´s POSITIVE
                var somaQuantity = productInstance.quantity - quantity;
                if (somaQuantity < 0) {
                    throw new AppError(
                        messageStorageProduct().ERROR.storageQuantityNegative[
                            'message'
                        ]
                    );
                }

                // if quantity ZERO product storage_type SOLD OUT (ESGOTADO)
                if (somaQuantity == 0) {
                    productInstance.storage_type = enumStorageType.SOLD_OUT; // esgotado
                }

                // subtraction quantity in stock
                productInstance.quantity -= quantity;

                // update DATE COLUMN ROW
                productInstance.updated_at = new Date();
                break;

            default:
                throw new AppError(
                    messageStorageProduct().ERROR.storageType['message']
                );
                break;
        }

        // saving update product
        const productSave = await this.productRepository.update(
            productInstance
        );
        if (!productSave) {
            throw new AppError(
                messageStorageProduct().ERROR.updateProduct['message']
            );
        }

        // saving create storage product
        const storageProductSave =
            await this.storageProductRepository.createAndSave({
                storage_type,
                product,
                quantity,
                user,
            });
        if (!storageProductSave) {
            throw new AppError(messageStorageProduct().ERROR.create['message']);
        }

        return;
    }
}

export { StorageProductService };
