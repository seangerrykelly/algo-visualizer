import React from 'react';
import './App.css';
import { SortingVisual } from './components/sorting-visuals/SortingVisual';
import { Home } from './components/home/Home';
import { Nav } from './components/nav/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<SortingVisual />} />
      </Routes>
    </Router>
  );
}

export default App;
