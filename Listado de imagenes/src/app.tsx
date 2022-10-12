import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ComicsList} from "./comics-list";
import {ToysList} from "./toys-list";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComicsList />} />
        <Route path="/toys-list" element={<ToysList />} />
      </Routes>
    </Router>
  );
};
