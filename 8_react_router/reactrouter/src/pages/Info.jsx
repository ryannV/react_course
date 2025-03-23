import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Info = () => {
    const {id} = useParams();
    const url = "http://localhost:3000/products/" + id;
    const {data: product, error, loading} = useFetch(url);

    return(
        <div>
            <h1>Ficha Técnica do produto {id}</h1>
            {error && <p>Houve error ao trazer dados...</p>}
            {loading && <p>Carregando dados...</p>}
            {product &&
                <div>
                    <p>Peso: {product.peso}</p>
                </div>
            }
        </div>
    );
}

export default Info;