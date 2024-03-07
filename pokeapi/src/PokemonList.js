import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './PokemonList.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        const pokemonDetailsPromises = data.results.map(pokemon => fetchPokemonData(pokemon.name));
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchPokemonData = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch pokemon data');
      }
      const pokemonData = await response.json();
      return pokemonData;
    } catch (error) {
      console.error('Error fetching pokemon data:', error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  const getBackgroundColor = (types) => {
    const defaultColor = '#A8A878'; // Gris por defecto
    const typeColors = {
      grass: '#78C850', // Verde
      fire: '#F08030', // Naranja
      water: '#6890F0', // Azul
    };
    return types.length > 0 && types[0].type.name in typeColors ? typeColors[types[0].type.name] : defaultColor;
  };

  return (
    <div className="pokemon-container">
      <SearchBar placeholder="Buscar pokemón" onSearch={handleSearch} />
      <div className="pokemon-list">
        {filteredPokemonList.map(pokemon => (
          <div key={pokemon.id} className="pokemon-card" style={{ backgroundColor: getBackgroundColor(pokemon.types) }}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
