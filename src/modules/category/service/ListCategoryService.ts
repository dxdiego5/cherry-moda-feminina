import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../repository/ICategoryRepository";

@injectable()
class ListCategoryService {

    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) { }

    async execute() {
        return await this.categoryRepository.listAllCategory();
    }
}

export { ListCategoryService }