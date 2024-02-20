import "./App.css";
import CustomInput from "./CustomInput";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nuevo usuario</h1>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <CustomInput label={"Usuario"} disabled={false} tipo={"text"}/>
          <CustomInput label={"Correo"} disabled={false} tipo={"text"}/>
          <CustomInput label={"Contraseña"} disabled={false} tipo ={"password"}/>
        </div>
        
        <div style={{display:"flex", justifyContent:"center", marginTop:20, flexDirection: 'row-reverse'}}>
        <CustomInput label={"Acepto los terminos y condiciones"} disabled={false} tipo ={"checkbox"}/>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Button text="Cancelar" disabled={true}/>
          <span style={{ marginRight: '20px' }}></span>
          <Button text="Aceptar" disabled={false} />
        </div>

      </header>
    </div>
  );
}

export default App;