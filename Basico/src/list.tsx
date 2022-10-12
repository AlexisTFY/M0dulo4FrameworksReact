import React from "react";
import {NewCompanyContext} from "./list.context";
import { MemberEntity } from "./list-model";
import { MemberRow } from "./member-row";
import { Link, generatePath } from 'react-router-dom';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Alert from '@mui/material/Alert';

const getMembers = (newCompany, limit = 5, page = 1) => {
  return fetch(
    `https://api.github.com/orgs/${newCompany}/members?per_page=${limit}&page=${page}`
  )
  .then((response) => response.json())

};

const INITIAL_PAGE = 1;
const LIMIT = 5;


export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const { newCompany, setNewCompany } = React.useContext(NewCompanyContext);
  const [company, setCompany] = React.useState(newCompany);

  const handleRequest = () => {
    getMembers(newCompany, LIMIT, page).then((members) =>
      setMembers(members)
    );
  };

  const prevPage = () => setPage((prevPage) => prevPage - 1);
  const nextPage = () => setPage((prevPage) => prevPage + 1);

  const loadList = (e) => {
    e.preventDefault();
    setNewCompany(company);
    setPage(1);
  };

  React.useEffect(() => {
    handleRequest();
  }, [page, newCompany]);

  return (
    <>
      <h2>Listado de miembros de {newCompany}</h2>

      <Link to={generatePath("/ricky_morty/list")} style={{ textDecoration: "none" }}>
        <Button size="small" variant="contained" style={{ margin: "0 0 40px 0" }}>
          Listado de personajes de Rick and Morty
        </Button>
      </Link>

      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, background: "#f5f5f5", boxShadow: "none" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={company}
          onChange={e => setCompany(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px', boxShadow: "none" }} aria-label="search" onClick={loadList}>
          <SearchIcon />
        </IconButton>
      </Paper>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {members.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
        </List>


        <Button onClick={prevPage} size="small" variant="contained" style={{ margin: "0 0 40px 0" }}>
          Atrás<script src=""></script>
        </Button>

        <Button onClick={nextPage} size="small" variant="contained" style={{ margin: "0 0 40px 0" }}>
          Siguiente
        </Button>
    </>
  );
};
