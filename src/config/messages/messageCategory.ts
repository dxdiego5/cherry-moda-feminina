
export default function messageCategory() {

    const SUCCESS = {
        create!: {
            message: "Categoria registrada com registered!",
        },
        update!: {
            message: "Category successfully updated!",
        }
    }

    const ERROR = {
        create!: {
            message: "Error trying to register category!",
        },
        update!: {
            message: "Error trying to update category!",
        },
        categoryNotExists!: {
            message: "Category not found!",
        },
        statusIncorrect!: {
            message: "Customer status is incorrect!"
        }
    }

    const ALERT = {
        create!: {
            message: "Category already has registration!",
        },
        categoryNotFound!: {
            message: "No category record found!",
        }
    }

    return { SUCCESS, ERROR, ALERT };

}