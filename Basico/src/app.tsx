import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import {ListPageRickyMorty } from "./ricky_morty/list-ricky-morty";
import {CharacterDetailPage } from "./ricky_morty/detail-ricky-morty";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/ricky_morty/list" element={<ListPageRickyMorty />} />
        <Route path="/ricky_morty/detail/:id" element={<CharacterDetailPage />} />
      </Routes>
    </Router>
  );
};
