// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

// 4- refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5- context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext();
  const {color, dispatch} = useTitleColorContext();

  // 6- alterando contexto mais complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  console.log(color)

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Contador atual = {counter}</p>
      <ChangeCounter/>

      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </div>
  )
}

export default Home