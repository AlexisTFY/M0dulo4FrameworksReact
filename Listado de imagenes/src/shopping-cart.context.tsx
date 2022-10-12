import React from "react";

interface ShoppingCardInterface{
    shoppingCardList: Array<string>;
    setShoppingCardList: (shoppingCardList: Array<string>) => void;
}

export const ShoppingCardContext = React.createContext<ShoppingCardInterface>({
    shoppingCardList: [],
    setShoppingCardList: (shoppingCardList: Array<string>) => { },
});


export const ShoppingCardContextComponent: React.FC = (props) => {
    const [shoppingCardList, setShoppingCardList] = React.useState([]);
    return (
        <ShoppingCardContext.Provider value={{ shoppingCardList, setShoppingCardList }}>
            {props.children}
        </ShoppingCardContext.Provider>
    )
};