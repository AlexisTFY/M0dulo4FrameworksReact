import React from "react";
import { useDebounce } from "use-debounce";
import { Link, generatePath } from 'react-router-dom';
import { CharacterRow } from './character-row'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const useCharacterCollection = () => {

  const [filter, setFilter] = React.useState("");
  const [characterCollection, setCharacterCollection] = React.useState([]);

  const [debounceFilter] = useDebounce(filter, 500);

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?name=${filter}`)
      .then(response => response.json())
      .then(json => setCharacterCollection(json.results ? json.results : []));
  }, [debounceFilter])

  return { filter, setFilter, characterCollection: characterCollection }
}


export const ListPageRickyMorty: React.FC = (props) => {
  const { filter, setFilter, characterCollection } = useCharacterCollection();

  return (
    <>
    <h2>Listado de personajes de Rick and Morty</h2>

    <Link to={generatePath("/")} style={{ textDecoration: "none" }}>
      <Button size="small" variant="contained" style={{ margin: "0 0 40px 0" }}>
        Listado de miembros de una empresa
      </Button>
    </Link>

    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, background: "#f5f5f5", boxShadow: "none" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Filtra entre los personajes ..."
        onChange={e => setFilter(e.target.value)}
      />
        <SearchIcon />
    </Paper>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {characterCollection.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
    </List>
    </>
  );
};
