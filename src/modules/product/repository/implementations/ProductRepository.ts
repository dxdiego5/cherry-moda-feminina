import { getRepository, Repository } from 'typeorm';
import { Category } from '../../../../../database/infra/typeorm/src/entity/categorys/Category';
import { Product } from '../../../../../database/infra/typeorm/src/entity/products/Product';
import { ICreateProductDTO } from '../../../DTOs/ICreateProductDTO';
import { IProductRepository } from '../IProductRepository';

class ProductRepository implements IProductRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

    // find product ID
    async findProductId(id: string): Promise<Product> {
        return await this.repository.findOne(id);
    }

    /**
     * Searching Product Name
     */
    async findProductName(product_name: string): Promise<Product> {
        return await this.repository.findOne({
            where: { product_name: product_name },
        });
    }

    /**
     * Create and save a new Product
     */
    async createAndSave({
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
    }: ICreateProductDTO): Promise<void> {
        const product = this.repository.create({
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
        });
        await this.repository.save(product);
    }

    /**
     * if product status is active then do not allow deactivating category,
     * because there is still a product with this category active
     */
    async findRelationCategoryId(id: string): Promise<Product[]> {
        return await this.repository.find({
            where: {
                category: id,
                status: 'active',
            },
            relations: ['category'],
        });
    }

    // List all products
    async listAllProduct(): Promise<Product[]> {
        return await this.repository.find();
    }
}

export { ProductRepository };
