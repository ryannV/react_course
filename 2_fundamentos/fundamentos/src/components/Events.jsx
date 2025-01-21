const Events = () => {
  const handleMyEvent = (e) => {
    console.log("Ativou o Evento!");
    console.log(e);
  };

  const renderSomething = (x) => {
    if (x) {
        return <h2>Posso escrever isso se for TRUE</h2>
    } else {
        return <h2>Posso escrever isso se for FALSE</h2>
    }
  } 

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>
            Clique-me
        </button>
      </div>

      <div>
        <button onClick={() => console.log("Simples é tranquilo!")}>
          Function Simples
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            const name = "Ryann";

            if (name === "Ryann") {
              console.log("O nome é Ryann");
            }
          }}
        >
          Não deveria acontecer
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;