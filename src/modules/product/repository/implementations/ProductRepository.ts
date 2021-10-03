import { getRepository, Repository } from "typeorm";
import { Category } from "../../../../../database/infra/typeorm/src/entity/categorys/Category";
import { Product } from "../../../../../database/infra/typeorm/src/entity/products/Product";
import { IProductRepository } from "../IProductRepository";

class ProductRepository implements IProductRepository {

    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }


    /**
     * if product status is active then do not allow deactivating category, 
     * because there is still a product with this category active
     */
    async findRelationCategoryId(id: string): Promise<Product[]> {
        return await this.repository.find({
            where: {
                category: id,
                status: "active"
            },
            relations: ["category"],
        });
    }

    // List all products
    async listAllProduct(): Promise<Product[]> {
        return await this.repository.find();
    }

}


export { ProductRepository }