

interface ICreateProductDTO {
    productName: string;
    code: string;
    barCode: string;
    size: string;
    quantity: number;
    cost: number;
    price: number;
    status: string;
    idCategory: string;
}

export { ICreateProductDTO }