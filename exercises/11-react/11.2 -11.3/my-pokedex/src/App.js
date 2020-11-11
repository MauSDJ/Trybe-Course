import React from 'react';
import pokemonList from './data';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={pokemonList} />
    </div>
  );
}

export default App;
