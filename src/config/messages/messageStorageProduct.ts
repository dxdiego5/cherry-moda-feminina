export default function messageStorageProduct() {
    // Success message
    const SUCCESS = {
        create: {
            message: `Storage product registered!`,
        },
        update: {
            message: 'Product successfully updated!',
        },
    };

    // Error message
    const ERROR = {
        storageType: {
            message: 'Storage Type is incorrect!',
        },
        StorageProductNotFound: {
            message:
                'Product not found, stock may be negative or product status inactive!',
        },
        updateProduct: {
            message: 'Product not successfully updated!',
        },
        create: {
            message: 'Storage Product not successfully create!',
        },
        storageQuantityNegative: {
            message: 'Inventory quantity cannot be negative!',
        },
    };

    // Alert message
    const ALERT = {
        create: {
            message: '',
        },
    };

    return { SUCCESS, ERROR, ALERT };
}

export { messageStorageProduct };
