import './SearchBar.css';

function SearchBar({placeholder}) {
  return (
    <div className="custom-input-container">
      <input type="text" className="custom-input" placeholder={placeholder} />
      <button className="custom-button">Buscar</button>
    </div>
  );
}

export default SearchBar;
