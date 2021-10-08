interface ICreateProductDTO {
    product_name: string;
    code?: string;
    bar_code?: string;
    size: string;
    quantity?: number;
    cost: number;
    price: number;
    url_img?: string;
    status?: string;
    category: object;
}

export { ICreateProductDTO };
