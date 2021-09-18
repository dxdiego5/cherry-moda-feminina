import "reflect-metadata";
import { createConnection, getRepository, Repository } from "typeorm";
import { Product } from "../../src/entity/products/Product";
import { StorageProduct, storageType } from "../../src/entity/storages/StorageProduct";
import { User } from "../../src/entity/users/User";


createConnection().then(async connection => {

    // searching a Product for relationship in the table
    productRepository: new Repository<Product>();
    const productRepository = getRepository(Product);
    const product = await productRepository.find();

    // searching a User for relationship in the table
    userRepository: new Repository<User>();
    const userRepository = getRepository(User);
    const user = await userRepository.find();


    console.log("Inserting a new Storage Product into the database...");
    const storageProduct = new StorageProduct();
    storageProduct.quantity = 5;
    storageProduct.storage_type = storageType.INPUT;

    /**
     * relations and tables
     */
    storageProduct.userId = user[0];
    storageProduct.productId = product[0];

    await connection.manager.save(storageProduct);

    console.log("Saved a new Storage with id: " + storageProduct.id);

}).catch(error => console.log(error));
