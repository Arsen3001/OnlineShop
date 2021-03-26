

export interface ShopInterfaces {
    _id: string;
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    reviews: IReview[];
}

export interface IPage {
    products: ShopInterfaces[];
    page: string;
    pages: number;
}

export interface IReview {
    _id: string;
    name: string;
    rating: number;
    comment: string;
    user: string;
    createdAt: string;
    updatedAt: string;
    product_id: string;
}

export interface IBasketList {
    product: ShopInterfaces;
    quantity: number;
}




