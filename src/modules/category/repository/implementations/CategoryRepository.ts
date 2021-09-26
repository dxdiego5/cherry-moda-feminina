import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../../database/infra/typeorm/src/entity/categorys/Category";
import { ICategoryRepository } from "../ICategoryRepository";


class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    /**
     * Searching category exists
     */
    findByCategoryExists(description: string): Promise<Category[]> {
        throw new Error("Method not implemented.");
    }


    /**
     * Creating and save category
     */
    async createAndSave(description: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * List all categorys
     */
    async listAllCategory(): Promise<Category[]> {
        return await this.repository.find();
    }


    /**
     * Searching category in ID
     */
    async findByCategoryId(id: string): Promise<Category> {
        return await this.repository.findOne(id);
    }

    /**
     * Update category
     */
    async update(category: Category): Promise<Category> {
        return await this.repository.save(category);
    }

}


export { CategoryRepository }