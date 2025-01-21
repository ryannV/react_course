const CarDetails = ({marca, modelo, ano, newCar}) => {
  return (
    <div>
        <h2>Detalhes Carro</h2>
        <ul>
            <li>Marca: - {marca}</li>
            <li>Modelo: - {modelo}</li>
            <li>Ano: - {ano}</li>
            {newCar === true ? (
                <li>Carro novo!</li>
            ) : (
                <li>Carro usado</li>
            )}
        </ul>
    </div>
  )
}

export default CarDetails