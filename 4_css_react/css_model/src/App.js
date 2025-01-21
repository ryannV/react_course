import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const [name] = useState("Ryann Victor Vieira Miranda");
  const title = false;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS com React</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>Paragrafo do App.js</p>

      {/* CSS Inline */}
      <p
        style={{
          color: "magenta",
          borderRadius: "50px",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        Este é um paragrafo que está recebendo estilos de forma Inline.
      </p>

      {/* CSS Inline Dinâmico */}
      <h2 style={ name === "Ryann Victor Vieira Miranda" ? { color: "red" } : { color: "black" } }>
        CSS Dinâmico
      </h2>
      <h2 style={name === null ? { color: "red" } : { color: "black" }}>
        CSS Dinâmico
      </h2>

      {/* Classe Dinâmica */}
      <h2 className={title ? "red-title" : "yellow-title"}>
        Esse texto está recebendo classes dinâmicas
      </h2>    

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
