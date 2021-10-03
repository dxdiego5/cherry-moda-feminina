import { Product } from "../../../../database/infra/typeorm/src/entity/products/Product";

interface IProductRepository {
    listAllProduct(): Promise<Product[]>;
    findRelationCategoryId(id: string): Promise<Product[]>;
}

export { IProductRepository }