import { inject, injectable } from 'tsyringe';
import { enumStatusType } from '../../../config/enumsTypes/EnumTypeStatus';
import { AppError } from '../../../config/errors/AppError';
import messageProduct from '../../../config/messages/messageProduct';
import { ICategoryRepository } from '../../category/repository/ICategoryRepository';
import { IProductRepository } from '../repository/IProductRepository';

@injectable()
class UpdateProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository,
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ) {}

    async execute({
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
    }) {
        // verify cost superior tha price
        if (cost >= price) {
            throw new AppError(
                messageProduct().ERROR.PriceProductInvalid['message']
            );
        }

        // verify exist product
        const product = await this.productRepository.findProductId(id);
        if (!product) {
            throw new AppError(
                messageProduct().ERROR.ProductNotFound['message']
            );
        }

        //check status of product exists
        switch (status) {
            case enumStatusType.ACTIVE:
                break;
            case enumStatusType.INACTIVE:
                // verify quantity in stock exist no allowed inactivate
                if (product.quantity > 0) {
                    throw new AppError(
                        messageProduct().ERROR.ProductInStock['message']
                    );
                }
                break;
            default:
                throw new AppError(
                    messageProduct().ERROR.statusIncorrect['message']
                );
        }

        // verify category exists
        const categoryExists = await this.categoryRepository.findByCategoryId(
            category.id
        );
        if (!categoryExists) {
            throw new AppError(
                messageProduct().ERROR.CategoryNotExist['message']
            );
        }

        product.product_name = product_name;
        product.code = code;
        product.bar_code = bar_code;
        product.size = size;
        product.cost = cost;
        product.price = price;
        product.url_img = url_img;
        product.status = status;
        product.category = category.id;
        product.updated_at = new Date();
        return await this.productRepository.update(product);
    }
}

export { UpdateProductService };
