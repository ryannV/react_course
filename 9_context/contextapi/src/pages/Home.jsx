// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter";

// 4- refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const {counter} = useContext(CounterContext);
  const {counter} = useCounterContext(); 

  return (
    <div>
      <h1>Home</h1>
      <p>Contador atual = {counter}</p>
      <ChangeCounter/>
    </div>
  )
}

export default Home