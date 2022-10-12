import React from "react";
import { ShoppingCardContext } from "./shopping-cart.context";
import {ProductModel} from "./product.model";
import { mapProductToVM } from "./productInCart.mappers";
import {getProductList} from "./api/api-shoppingCartList";
import { ProductInCart } from "./productInCart";

export const ShoppingCard: React.FC = () => {
  const { shoppingCardList } = React.useContext(ShoppingCardContext);
  const [list, setList] = React.useState<ProductModel[]>([]);

  React.useEffect(() => {
    setList([]);
    shoppingCardList.forEach(pictureId => {
      getProductList(pictureId)
        .then(mapProductToVM)
        .then(pictureInfo => {
          setList(oldList => [...oldList, pictureInfo]);
        });
    });
  }, [shoppingCardList]);

  return (
    <>
      <h3>Carrito de la compra</h3>
      <ProductInCart productList={list} />
    </>
  );
};
