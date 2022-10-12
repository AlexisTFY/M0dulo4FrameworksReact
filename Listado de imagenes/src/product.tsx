import React from "react";
import {ProductModel} from "./product.model";
import { ShoppingCardContext } from "./shopping-cart.context";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface Props {
    productInfo: ProductModel;
  }

export const Product: React.FC<Props> = props => {

    // const [comics, setComics] = React.useState<ProductModel[]>([]);
    const { productInfo } = props;
    const { shoppingCardList, setShoppingCardList } = React.useContext(ShoppingCardContext);
    const [selectedCheck, setSelectedCheck] = React.useState(false);
    
    const handleCheckbox = e => {
        const idCheckbox = e.target.value;
        const checked = e.target.checked;
    
        if (checked && !shoppingCardList.some(id => id === idCheckbox)) {
            setShoppingCardList([...shoppingCardList, idCheckbox]);
        }
    
        productInfo.selected = !productInfo.selected;

        console.log(shoppingCardList);
      };
    
      React.useEffect(() => {
        productInfo.selected = shoppingCardList.some(id => id === productInfo.id);
        setSelectedCheck(productInfo.selected);
      }, [shoppingCardList]);
    
      return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
            <img style={{maxWidth:"150px", width: "100%", marginBottom: "15px"}} src={productInfo.picUrl} alt={productInfo.id} />
            <FormControlLabel
                value={productInfo.id}
                control={<Checkbox/>}
                label={productInfo.title}
                labelPlacement="top"
                checked={selectedCheck}
                onChange={handleCheckbox}
            />
            </div>
        </>
      );
    };