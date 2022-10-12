import React from "react";
import { getToyList } from "./api/api-toysList";
import { mapProductVM } from "./product.mappers";
import { Product } from "./product";
import { Link } from "react-router-dom";
import {ProductModel} from "./product.model";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export const ToysList: React.FC = () => {

  const [comics, setComics] = React.useState<ProductModel[]>([]);

  React.useEffect(() => {
    getToyList()
      .then(mapProductVM)
      .then(setComics);
  }, []);
  
    return (
      <>
      <ButtonGroup size="large" aria-label="large button group">
        <Link to="/" style={{ textDecoration: "none" }}><Button>Comis</Button></Link>
        <Link to="/toys-list" style={{ textDecoration: "none" }}><Button>Figuras</Button></Link>
      </ButtonGroup>
        
        <h2>Figuras</h2>
  
        <div style={{display: "flex", gap:"15px", flexWrap: "wrap"}}>
          {comics.map((comic) => (
            <Product key={comic.id} productInfo={comic} />
          ))}
        </div>
      </>
    );
  };