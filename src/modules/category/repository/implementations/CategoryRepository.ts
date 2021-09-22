import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../../database/infra/typeorm/src/entity/categorys/Category";
import { ICategoryRepository } from "../ICategoryRepository";


class CategoryRepository implements ICategoryRepository {

    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }


    /**
     * Creating and save category
     */
    async createAndSave(name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    /**
     * List all categorys
     */
    async listAllCategory(): Promise<Category[]> {
        return await this.repository.find();
    }

    /**
     * Searching category exists
     */
    async findByClientExists(name: string): Promise<Category[]> {
        return await this.repository.find({ name });
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