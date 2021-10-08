import { Category } from '../../../../database/infra/typeorm/src/entity/categorys/Category';

interface ICategoryRepository {
    createAndSave(description: string): Promise<void>;
    listAllCategory(): Promise<Category[]>;
    findByCategoryExists(description: string): Promise<Category[]>;
    findByCategoryId(id: string): Promise<Category>;
    update(category: Category): Promise<Category>;
}

export { ICategoryRepository };
