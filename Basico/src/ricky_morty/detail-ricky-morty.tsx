import React from "react";
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {CharacterDetailEntity} from './caracter.model'



const createDefaultCharacterDetail = (): CharacterDetailEntity => ({
  name: '',
  status: '',
  species: '',
  image: '',
  type: 'None',
  origin: {
    name: ''
  }
});

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const [character, setCharacter] = React.useState<CharacterDetailEntity>(createDefaultCharacterDetail());

  // cargamos los datos:
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);

  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={character.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        id: {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Status {character.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Specie: {character.species}
        </Typography>
        { character.type != '' &&
        <Typography variant="body2" color="text.secondary">
        Type: {character.type}
        </Typography>
        }
        <Typography variant="body2" color="text.secondary">
        Origin: {character.origin.name}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to="/ricky_morty/list" style={{ textDecoration: "none" }}>
        <Button size="small">Volver</Button>
    </Link>
      </CardActions>
    </Card>
    </>
  )
}