import "reflect-metadata";

import { createConnection, getRepository, Repository } from "typeorm";
import faker from 'faker';
import { Product } from "../../src/entity/products/Product";
import { Category } from "../../src/entity/categorys/Category";
import { AppError } from "../../../../../src/config/errors/AppError";
import messageCategory from "../../../../../src/config/messages/messageCategory";

createConnection().then(async connection => {

    var repositoryCategory: Repository<Category>;
    repositoryCategory = getRepository(Category);
    const category = await repositoryCategory.findOne();

    //verify exists category
    if (!category) {
        throw new AppError(messageCategory().ERROR.categoryNotExists["message"], 401)
    }

    console.log("Inserting a new Product into the database...");

    const product = new Product();

    product.product_name = faker.commerce.productName();
    product.code = "@#@#$##$$@###$@$";
    product.bar_code = "0980980798090908";
    product.cost = 99.09;
    product.price = 159.99;
    product.size = "G";
    product.quantity = 0;
    product.status = "active";
    product.category = category;
    product.url_img = "clothes.png";

    await connection.manager.save(product);

    console.log("-PROCESS-");
    console.log("Saved a new product with id: " + product.id);
    console.log("---");

    console.log("--> SUCCESSFUL SEEDER SAVE CATEGORY <-- 😃 👍 ");

}).catch(error => console.log(error));