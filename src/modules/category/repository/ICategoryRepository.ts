import { Category } from "../../../../database/infra/typeorm/src/entity/categorys/Category";


interface ICategoryRepository {
    createAndSave(name: string): Promise<void>;
    listAllCategory(): Promise<Category[]>;
    findByClientExists(name: string): Promise<Category[]>;
    findByCategoryId(id: string): Promise<Category>;
    update(category: Category): Promise<Category>;
}

export { ICategoryRepository }