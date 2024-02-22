import './App.css';
import SearchBar from './SearchBar.js';
import Receta from './Receta.js';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
          <img src = "https://png.pngtree.com/png-clipart/20200727/original/pngtree-chef-abstract-kitchener-cooky-icon-logo-png-image_5139118.jpg" style={{ width: '250px', height: '250px', paddingRight: '20vh'}} alt = 'logo'></img>
          <h1>Recetas de cocina</h1>
      </header>

      <div id = 'serchbar'>
        <SearchBar placeholder={'Nombre de la receta'}/>
      </div>

      <body className = "App-body">
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo1" descripcion="platillo 1"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo2" descripcion="platillo 2"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo3" descripcion="platillo 3"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo4" descripcion="platillo 4"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo5" descripcion="platillo 5"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo6" descripcion="platillo 6"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo7" descripcion="platillo 7"/>
        <Receta source = 'https://www.suzukijember.com/gallery/gambar_product/default.jpg' titulo="ejemplo8" descripcion="platillo 8"/>
      </body>


    </div>
  );
}

export default App;
