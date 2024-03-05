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
        const pokemonDetailsPromises = [];

        for (let i = 0; i < data.results.length; i++) {
          const pokemon = data.results[i];
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error('Failed to fetch pokemon data');
          }
          const pokemonData = await pokemonResponse.json();
          pokemonDetailsPromises.push(fetchSpeciesData(pokemonData));
        }

        // Esperar a que se resuelvan todas las Promesas
        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        setPokemonList(pokemonDetails);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchSpeciesData = async (pokemonData) => {
    try {
      const speciesResponse = await fetch(pokemonData.species.url);
      if (!speciesResponse.ok) {
        throw new Error('Failed to fetch species data');
      }
      const speciesData = await speciesResponse.json();
      const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');
      return { ...pokemonData, description: description.flavor_text };
    } catch (error) {
      console.error('Error fetching species data:', error);
    }
  };

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'grass':
        return '#78C850'; // Verde
      case 'fire':
        return '#F08030'; // Naranja
      case 'water':
        return '#6890F0'; // Azul
      default:
        return '#A8A878'; // Gris por defecto
    }
  };

  const pokemonCards = [];
  for (let i = 0; i < pokemonList.length; i++) {
    const pokemon = pokemonList[i];
    pokemonCards.push(
      <div key={i} className="pokemon-card" style={{ backgroundColor: getBackgroundColor(pokemon.types[0].type.name)}}>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Description: {pokemon.description}</p>
        <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      </div>
    );
  }

  return (
    <div className="pokemon-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="pokemon-card" style={{ backgroundColor: getBackgroundColor(pokemon.types[0].type.name), margin: '50px', padding: '5px' }}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Description: {pokemon.description}</p>
          <p>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;