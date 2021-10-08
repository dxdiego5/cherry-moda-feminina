export default function messageProduct() {
    // Success message
    const SUCCESS = {
        create: {
            message: 'Product successfully registered!',
        },
        update: {
            message: 'Product successfully updated!',
        },
    };

    // Error message
    const ERROR = {
        create: {
            message: 'Error trying to register product!',
        },
        update: {
            message: 'Error trying to update product!',
        },
        statusIncorrect: {
            message: 'Product status is incorrect!',
        },
        ProductNotFound: {
            message: 'No product registration found!',
        },
        PriceProductInvalid: {
            message: 'Cost value cannot be greater than sales!',
        },
        CategoryNotExist: {
            message: 'Category not exists!',
        },
        ProductInStock: {
            message: 'product still has stock !',
        },
    };

    // Alert message
    const ALERT = {
        create: {
            message: 'Product already has registration!',
        },
    };

    return { SUCCESS, ERROR, ALERT };
}

export { messageProduct };
