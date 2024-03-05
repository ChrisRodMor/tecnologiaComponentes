import React from 'react';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PokeApi</h1>
      </header>

      <div className="App-body">
        <PokemonList />
      </div>
    </div>
  );
}

export default App;