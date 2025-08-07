// 3- alterando o contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Adicionar Valor ao Contador</button>
      <button onClick={() => setCounter(0)}>Resetar Valor do Contador</button>
    </div>
  );
};

export default ChangeCounter;
