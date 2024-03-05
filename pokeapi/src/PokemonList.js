import React, { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        // Obtener los detalles de cada Pokemon
        const pokemonDetailsPromises = data.results.map(async pokemon => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error('Failed to fetch pokemon data');
          }
          return await pokemonResponse.json();
        });
        // Esperar a que se resuelvan todas las Promesas
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
