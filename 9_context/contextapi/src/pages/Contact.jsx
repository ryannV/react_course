import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {
  const {counter} = useCounterContext();

  return (
    <div>
      <h1>Contact</h1>
      <p>{counter}</p>
    </div>
  )
}

export default Contact