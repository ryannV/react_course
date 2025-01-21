const Challenge = () => {
    const firstNumber = 10;
    const secondNumber = 15;

    const Soma = (a, b) => {
        return a+b;
    }

    return(
        <div>
            <h2>Mostrando o primeiro valor {firstNumber} e agora o segundo valor {secondNumber}</h2>
            <button onClick={() => console.log(Soma(firstNumber, secondNumber))}>Clique para somar!</button>
        </div>
    )
}

export default Challenge;