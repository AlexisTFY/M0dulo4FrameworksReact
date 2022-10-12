import React from "react";
import { Link, generatePath } from "react-router-dom";
import { MemberEntity } from "./list-model";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';

interface Props {
    member: MemberEntity;
}

export const MemberRow : React.FC<Props> = (props) => {
    const { member } = props;

    return (
      <>
      
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ width: "5rem", height: "5rem", margin: 20 }}>
            <img src={member.avatar_url}  style={{ width: "5rem", height: "5rem" }}/>
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={member.id} secondary={member.login} />
        
          <Link to={generatePath("/detail/:id", { id: member.login })} style={{ textDecoration: "none" }}>
            <Button size="small" variant="contained" endIcon={<Visibility />}>
              Ver
            </Button>
          </Link>
          
        </ListItem>

      </>
      
    )
}