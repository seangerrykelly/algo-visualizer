import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { SortingVisual } from './components/sorting-visuals/SortingVisual';
import { Home } from './components/home/Home';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <SortingVisual />
    </div>
  );
}

export default App;
