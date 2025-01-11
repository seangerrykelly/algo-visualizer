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
import { SearchingVisual } from './components/searching-visuals/SearchingVisual';
import { PathfindingVisual } from './components/pathfinding-visuals/PathfindingVisual';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<SortingVisual />} />
        <Route path="/searching" element={<SearchingVisual />} />
        <Route path="/pathfinding" element={<PathfindingVisual />} />
      </Routes>
    </Router>
  );
}

export default App;
