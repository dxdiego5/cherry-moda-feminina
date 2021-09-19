import "reflect-metadata";

import { createConnection } from "typeorm";
import { hashPassword } from "../../../../../src/config/functions/HahsFunctions";
import { Category } from "../../src/entity/categorys/Category";
import { Product } from "../../src/entity/products/Product";
import { User } from "../../src/entity/users/User";
import { StorageProduct, storageType } from "../../src/entity/storages/StorageProduct";
import { Client } from "../../src/entity/clients/Client";

import faker from 'faker';
createConnection().then(async connection => {

    console.log("START PROCESS -----");
    console.log("------- Inserting a new USER into the database...");
    const user = new User();
    user.name = faker.name.firstName();
    user.email = faker.internet.email();
    // encrypt password
    user.password = await hashPassword("12345");
    user.isAdmin = true;
    user.status = 1;

    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("--- END SAVE USER ------------");
    console.log("---");
    console.log("---");

    /**
     * 
     */

    console.log("Inserting a new CATEGORY into the database...");
    const category = new Category();
    category.name = faker.commerce.product();
    category.status = 1;
    await connection.manager.save(category);
    console.log("Saved a new category with id: " + category.id);
    console.log("--- END SAVE CATEGORY ------------");
    console.log("---");
    console.log("---");

    /**
     * 
     */

    console.log("Inserting a new PRODUCT into the database...");
    const product = new Product();
    product.name = faker.commerce.productName();
    product.code = "999999";
    product.bar_code = "###@#@###$%#$#%%%##";
    product.amount = parseFloat(faker.finance.amount());
    product.url_img = faker.image.fashion();
    product.status = 1;
    product.categoryId = category;

    await connection.manager.save(product);
    console.log("Saved a new client with id: " + product.id);
    console.log("--- END SAVE PRODUCT ------------");
    console.log("---");
    console.log("---");
    /**
     * 
     */

    console.log("Inserting a new STORAGE PRODUCT into the database...");
    const storageProduct = new StorageProduct();
    storageProduct.quantity = 5;
    storageProduct.storage_type = storageType.INPUT;
    /**
     * relations and tables
     */
    storageProduct.userId = user;
    storageProduct.productId = product;

    await connection.manager.save(storageProduct);
    console.log("Saved a new Storage with id: " + storageProduct.id);
    console.log("--- END SAVE STORAGE PRODUCT ------------");
    console.log("---");
    console.log("---");
    /**
     * 
     */

    console.log("Inserting a new CLIENT into the database...");
    const client = new Client();
    client.name = faker.name.firstName();
    client.tel = faker.phone.phoneNumber();
    client.email = faker.internet.email();
    client.cpf = faker.random.number().toString();
    client.address = faker.address.streetAddress();
    client.status = 1;

    await connection.manager.save(client);
    console.log("Saved a new client with id: " + client.id);
    console.log("--- END SAVE CLIENT ------------");
    console.log("---");
    console.log("---");

    console.log(" --> SUCCESSFUL SEEDERS <-- 😃 👍  OK");

}).catch(error => console.log(error));