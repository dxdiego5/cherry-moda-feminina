import "reflect-metadata";
import { createConnection, getRepository, Repository } from "typeorm";
import { Category } from "../../src/entity/categorys/Category";
import { Product } from "../../src/entity/products/Product";

createConnection().then(async connection => {

    // searching a category for relationship in the table
    categoryRepository: new Repository<Category>();
    const categoryRepository = getRepository(Category);

    const category = await categoryRepository.find();

    console.log("Inserting a new Product into the database...");
    const products = new Product();
    products.name = "Camiseta Cherry Moda Pink";
    products.code = "999999";
    products.bar_code = "###@#@###$%#$#%%%##";
    products.amount = 49.90;
    products.url_img = "imgs/clothes/";
    products.status = 1;

    products.categoryId = category[0];

    await connection.manager.save(products);

    console.log("Saved a new client with id: " + products.id);

}).catch(error => console.log(error));
