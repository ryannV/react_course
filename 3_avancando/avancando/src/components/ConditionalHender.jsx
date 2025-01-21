import { useState } from "react";

const ConditionalHender = () => {
  const [x] = useState(true);
  const [name, setName] = useState("Victor");

  return (
    <div>
      <h2>Se for Verdadeiro será exibido?</h2>
      {x && <p>True, será exibido!</p>}
      {!x && <p>False, não será exibido!</p>}

      <h2>IF Ternário</h2>
      {name === "Ryann" ? (
        <div>
            <p>O nome é Ryann</p>
        </div>
      ) : (
        <div>
            <p>Nome não encontrado!</p>
        </div>
      )}
       <button onClick={() => setName("Ryann")}>Alterar para Ryann</button>
    </div>
  );
};

export default ConditionalHender;
