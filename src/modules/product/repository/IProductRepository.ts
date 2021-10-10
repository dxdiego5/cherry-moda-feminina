import { Product } from '../../../../database/infra/typeorm/src/entity/products/Product';
import { ICreateProductDTO } from '../../DTOs/ICreateProductDTO';

interface IProductRepository {
    listAllProduct(): Promise<Product[]>;
    findRelationCategoryId(id: string): Promise<Product[]>;
    findProductId(id: string): Promise<Product>;
    update(product: Product): Promise<Product>;
    findProductName(product_name: string): Promise<Product>;
    createAndSave({
        product_name,
        code,
        bar_code,
        size,
        quantity,
        cost,
        price,
        url_img,
        status,
        category,
        storage_type,
    }: ICreateProductDTO): Promise<void>;
}

export { IProductRepository };
