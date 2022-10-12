import React from 'react';
import {ProductModel} from "./product.model";
import { ShoppingCardContext } from "./shopping-cart.context";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  productList: Array<ProductModel>;
}
export const ProductInCart: React.FC<Props> = props => {
  const { productList } = props;
  const { shoppingCardList, setShoppingCardList } = React.useContext(ShoppingCardContext);

  return (
    <>
      {productList.map(product => (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "25px" }}>
        <img style={{maxWidth:"150px", width: "100%", marginBottom: "15px"}} src={product.picUrl} alt={product.id} />
        <p style= {{ fontSize: "14px", margin: "0 0 10px 0"}}>{product.title}</p>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            console.log('Delete product.id', product.id);
            console.log('shoppingCardList', shoppingCardList);
            setShoppingCardList(shoppingCardList.filter(id => id !== product.id));
          }}
        >
          Borrar
        </Button>
        </div>
      ))}
    </>
  );
};