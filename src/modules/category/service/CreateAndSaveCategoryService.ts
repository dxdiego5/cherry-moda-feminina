import { inject, injectable } from "tsyringe";
import { AppError } from "../../../config/errors/AppError";
import messageCategory from "../../../config/messages/messageCategory";
import { ICategoryRepository } from "../repository/ICategoryRepository";

@injectable()
class CreateAndSaveCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository,
    ) { }

    async execute({ description }) {

        const category = await this.categoryRepository.findByCategoryExists(description);
        if (category.length > 0) {
            throw new AppError(messageCategory().ERROR.categoryDescriptionExists["message"], 401);
        }

        return await this.categoryRepository.createAndSave(description);
    }
}

export { CreateAndSaveCategoryService }