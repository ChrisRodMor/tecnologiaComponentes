import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './PokemonList.css';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPokemon, setExpandedPokemon] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleToggleDetails = (pokemon) => {
    if (expandedPokemon === pokemon) {
      setExpandedPokemon(null); // Cerrar detalles si ya están expandidos
      setIsSidebarOpen(false); // Ocultar el sidebar al cerrar los detalles
    } else {
      setExpandedPokemon(pokemon); // Mostrar detalles si no están expandidos
      setIsSidebarOpen(true); // Mostrar el sidebar al abrir los detalles
    }
  };

  const handleCloseDetails = () => {
    setExpandedPokemon(null);
    setIsSidebarOpen(false);
  };

  const PokemonDetailsSidebar = ({ pokemon, onClose }) => {
    if (!pokemon) return null; // No mostrar nada si no hay Pokemon seleccionado
  
    return (
      <div className="pokemon-details-overlay">
        <div className="pokemon-details-sidebar-wrapper">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>Detalles de {pokemon.name}</h2>
          <div className="pokemon-details-content">
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Ataque: {pokemon.stats[1].base_stat}</p>
            <p>Defensa: {pokemon.stats[2].base_stat}</p>
            <p>Ataque Especial: {pokemon.stats[3].base_stat}</p>
            <p>Velocidad: {pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pokemon-container">
      <SearchBar placeholder="Buscar pokemón" onSearch={handleSearch} />
      <div className="pokemon-list">
        {filteredPokemonList.map(pokemon => (
          <div key={pokemon.id} className="pokemon-card" style={{ backgroundColor: getBackgroundColor(pokemon.types) }}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <button className="ver-mas-button" onClick={() => handleToggleDetails(pokemon)}>
              {expandedPokemon === pokemon ? 'Cerrar Detalles' : 'Ver más'}
            </button>
          </div>
        ))}
      </div>
      {isSidebarOpen && <PokemonDetailsSidebar pokemon={expandedPokemon} onClose={() => setIsSidebarOpen(false)} />}
    </div>
  );
}

export default PokemonList;
