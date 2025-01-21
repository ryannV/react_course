const Container = ({children, value}) => {
  return (
    <div>
        <h1>Testando Container</h1>
        {children}
        <p>O valor é: {value}</p>
    </div>
  )
}

export default Container