// useParams linka com o ':id' que foi adicionado na rota do arquivo app.js
// poderia linkar com qql outra informação, como fruta/carro/cor
import {Link, useParams} from 'react-router-dom';

import {useFetch} from '../hooks/useFetch';

const Product = () => {

    // 4 - Rota Dinamica
    const {id} = useParams();

    // 5 - Carregamento de dados individuais
    const url = 'http://localhost:3000/products/' + id;
    const {data: product, loading, error} = useFetch(url);

    console.log(product);
    return(
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && 
                <div>
                    <h1>{product.name}</h1>
                    <p>R$: {product.price}</p>
                    <Link to={`/product/${product.id}/info`}>Ficha técnica</Link>
                </div>
            }
        </>
    );
}

export default Product;