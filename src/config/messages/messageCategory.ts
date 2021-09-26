
export default function messageCategory() {

    // Success message 
    const SUCCESS = {
        create!: {
            message: "Category successfully registered!",
        },
        update!: {
            message: "Category successfully updated!",
        }
    }

    // Error message
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
        },
        categoryDescriptionExists!: {
            message: "Category description already exists!"
        }
    }

    // Alert message
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