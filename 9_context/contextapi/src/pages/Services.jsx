import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Services = () => {
  const {color} = useTitleColorContext();
  return (
    <div style={{color:color}}>
      <h1>Services</h1>
    </div>
  )
}

export default Services