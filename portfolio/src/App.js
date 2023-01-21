import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0)


  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarClic = () => {
    setNumClics(numClics * 0);
  };

  return (
    <div className="App">
      <Contador numClics={numClics} />

      <Boton texto="clic" esBotonDeClic={true} manejarClic={manejarClic} />

      <Boton texto="reset" esBotonDeClic={false} manejarClic={reiniciarClic} />
    </div>
  );
}

export default App;
