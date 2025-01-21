const UserDatails = () => {
  const pessoas = [
    { id: 1, nome: "Ryann", idade: 20, profissao: "Programer" },
    { id: 2, nome: "Victor", idade: 17, profissao: "Analist" },
    { id: 3, nome: "Vieira", idade: 18, profissao: "Banker" },
    { id: 4, nome: "Miranda", idade: 16, profissao: "Cientist" },
  ];

  return (
    <div>
        <ul>
            {pessoas.map((pessoas) => (
                <li key={pessoas.id}>
                    {pessoas.nome} - {pessoas.idade} - {pessoas.profissao} - 
                    {pessoas.idade >=  18  ? (<span> Pode tirar carteira</span>) : (<span> Não pode tirar carteira</span>)}
                </li>
            ))}
        </ul>
    </div>
  )
};

export default UserDatails;
