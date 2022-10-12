import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "../list-model";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';

interface Props {
    character: MemberEntity;
}

export const CharacterRow : React.FC<Props> = (props) => {
    const { character } = props;

    return (
      <>
      
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ width: "5rem", height: "5rem", margin: 20 }}>
            <img src={character.image}  style={{ width: "5rem", height: "5rem" }}/>
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={character.id} secondary={character.name} />
        
          <Link to={generatePath("/ricky_morty/detail/:id", { id: character.id })} style={{ textDecoration: "none" }}>
            <Button size="small" variant="contained" endIcon={<Visibility />}>
              Ver
            </Button>
          </Link>
          
        </ListItem>

      </>
      
    )
}