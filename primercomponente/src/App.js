import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Nuevo usuario</h1>

        <CustomInput label={"Usuario"} disabled={false} tipo={"text"} />
        <CustomInput label={"Correo"} disabled={false} tipo={"text"} />
        <CustomInput label={"Contraseña"} disabled={false} tipo ={"password"}/>
        
        <div>
          <Button text="cancelar" disabled={true} />
          <Button text="aceptar" disabled={false} />
        </div>

      </header>
    </div>
  );
}

export default App;