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
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
        <Receta source="URL_DE_LA_IMAGEN" titulo="Título del platillo" descripcion="Descripción del platillo"/>
      </body>


    </div>
  );
}

export default App;
