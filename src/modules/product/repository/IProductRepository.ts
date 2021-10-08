import { Product } from '../../../../database/infra/typeorm/src/entity/products/Product';
import { ICreateProductDTO } from '../../DTOs/ICreateProductDTO';

interface IProductRepository {
    listAllProduct(): Promise<Product[]>;
    findRelationCategoryId(id: string): Promise<Product[]>;
    findProductId(id: string): Promise<Product>;
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
    }: ICreateProductDTO): Promise<void>;
}

export { IProductRepository };
