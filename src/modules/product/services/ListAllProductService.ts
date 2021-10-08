import { inject, injectable } from 'tsyringe';
import { IProductRepository } from '../repository/IProductRepository';

@injectable()
class ListAllProductService {
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository
    ) {}

    async execute() {
        return this.productRepository.listAllProduct();
    }
}

export { ListAllProductService };
