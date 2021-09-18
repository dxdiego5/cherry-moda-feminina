import "reflect-metadata";
import { createConnection } from "typeorm";
import { Category } from "../../src/entity/categorys/Category";


createConnection().then(async connection => {

    console.log("Inserting a new category into the database...");
    const category = new Category();
    category.name = "Blusas";
    category.status = 1;

    await connection.manager.save(category);

    console.log("Saved a new category with id: " + category.id);

}).catch(error => console.log(error));