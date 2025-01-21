const TemplateExpresion = () => {
    const name = "Ryann Victor"
    const data = {
        age: 20,
        profession: "Programmer",
        inst: "Digifarma"
    }

    return(
        <div>
            <h2>Olá {name}, seja Bem-Vindo!</h2>
            <p>You job with {data.profession}, have {data.age} old years, and work at a {data.inst}...</p>
        </div>
    )
}

export default TemplateExpresion;