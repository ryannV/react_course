import  {useState, useEffect} from 'react';

// 4 - Custom Hook
export const useFetch = (url) =>{
    const [data, setData]  = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 - Loading
    const [loading, setLoading] = useState(false);

    // 7 - Tratando Erros
    const [error, setError] = useState("");

    // 8 - Desafio
    const [itemId, setItemId]  = useState(null);

    const httpConfig = (data, method) => {
        if (method ===  "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        } else if(method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                }
            });
            setMethod(method);
            setItemId(data);
        } else {
            setError("Erro na Gravação dos Dados!");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const res = await fetch(url);
                const dados = await res.json();
                setData(dados);
            } catch (error) {
                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    // 5 - Refatorando POST
    useEffect(() => {
        const httpRequest = async  () => {
            let dados;

            if (method === "POST") {
                let fetchOptions = [url, config];
                const res =  await fetch(...fetchOptions);
                dados =  await res.json();
            } else if(method === "DELETE"){
                const deleteUrl =  `${url}/${itemId}`
                const res  =  await fetch(deleteUrl, config);
                dados = await res.json();
            }
            setCallFetch(dados);
        }
        httpRequest();
    }, [config, method, url])
    
    return {data, httpConfig, loading, error};
};