import { inject, injectable } from 'tsyringe';
import { enumStatusType } from '../../../config/enumsTypes/EnumTypeStatus';
import { AppError } from '../../../config/errors/AppError';
import messageCategory from '../../../config/messages/messageCategory';
import { IProductRepository } from '../../product/repository/IProductRepository';
import { ICategoryRepository } from '../repository/ICategoryRepository';

@injectable()
class UpdateCategoryService {
    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository,
        @inject('ProductRepository')
        private productRepository: IProductRepository
    ) {}

    async execute({ id, description, status }) {
        //check status of category exists
        switch (status) {
            case enumStatusType.ACTIVE:
                break;
            case enumStatusType.INACTIVE:
                //verify status category in entity product
                const productStatus =
                    await this.productRepository.findRelationCategoryId(id);
                if (productStatus.length > 0) {
                    throw new AppError(
                        messageCategory().ERROR.categoryNotInactivated[
                            'message'
                        ]
                    );
                }
                break;
            default:
                throw new AppError(
                    messageCategory().ERROR.statusIncorrect['message']
                );
        }

        const category = await this.categoryRepository.findByCategoryId(id);
        // Verify exists category
        if (!category) {
            throw new AppError(
                messageCategory().ERROR.categoryNotExists['message']
            );
        }

        category.description = description;
        category.status = status;
        category.updated_at = new Date();

        return await this.categoryRepository.update(category);
    }
}

export { UpdateCategoryService };
