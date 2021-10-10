import { inject, injectable } from 'tsyringe';
import { enumStorageType } from '../../../config/enumsTypes/EnumTypeStorageProduct';
import { AppError } from '../../../config/errors/AppError';
import messageProduct from '../../../config/messages/messageProduct';
import { ICategoryRepository } from '../../category/repository/ICategoryRepository';
import { IProductRepository } from '../repository/IProductRepository';

@injectable()
class CreateAndSaveProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository,
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({
        product_name,
        code,
        bar_code,
        size,
        cost,
        price,
        url_img,
        status,
        category,
    }) {
        // verify exists product name
        const productName = await this.productRepository.findProductName(
            product_name
        );
        if (productName) {
            throw new AppError(messageProduct().ALERT.create['message']);
        }

        // verify cost superior tha price
        if (cost >= price) {
            throw new AppError(
                messageProduct().ERROR.PriceProductInvalid['message']
            );
        }

        /* Default value in stock initialize 0 */
        const quantity = 0;

        /* Default value in input create initialize */
        const storage_type = enumStorageType.ZERO;

        // verify category exists
        const categoryExists = await this.categoryRepository.findByCategoryId(
            category.id
        );
        if (!categoryExists) {
            throw new AppError(
                messageProduct().ERROR.CategoryNotExist['message']
            );
        }

        // create and save
        const product = await this.productRepository.createAndSave({
            product_name,
            code,
            bar_code,
            size,
            quantity,
            cost,
            price,
            url_img,
            status,
            category,
            storage_type,
        });
    }
}

export { CreateAndSaveProductService };
