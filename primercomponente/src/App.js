import logo from "./logo.svg";
import "./App.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Primer Componente</h1>
        <CustomInput label={"Nombre"} disabled={false} tipo={"text"} />
        <CustomInput label={"Apellido"} disabled={false} tipo ={"password"}/>
        
        <Button text="presionar" disabled={false} />
      </header>
    </div>
  );
}

export default App;