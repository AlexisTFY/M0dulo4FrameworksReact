import { Product } from './api.model';
import { mockShoppingCardList } from './mock-data-shoppingCardList';

let shoppingCardList = [...mockShoppingCardList];

export const getProductList = async (id: string): Promise<Product> => {
    return shoppingCardList.find(product => product.id === id);
};
