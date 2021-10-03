import "reflect-metadata";

import { createConnection } from "typeorm";
import faker from 'faker';
import { Category } from "../../src/entity/categorys/Category";

createConnection().then(async connection => {

    console.log("Inserting a new CATEGORY into the database...");

    const category = new Category();

    category.description = faker.commerce.productName();
    category.status = "active";

    await connection.manager.save(category);
    console.log("-PROCESS-");
    console.log("Saved a new category with id: " + category.id);
    console.log("---");

    console.log("--> SUCCESSFUL SEEDER SAVE CATEGORY <-- 😃 👍 ");

}).catch(error => console.log(error));