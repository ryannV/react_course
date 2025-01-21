import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);
    return(
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData = 15}}>Mudar Variavel</button>

            <p>Valor: {number}</p>
            <button onClick={() => {setNumber(25)}}>Mudar useSate</button>
        </div>

    )
} 

export default ManageData;

// Variaveis não re-enderiza o código
// Utilizamos o useState para suprir essa necessidade
// De quando precisar alterar algum valor, ele altere na tela