import { useState } from "react";

const RenderList = () => {
  const [list] = useState(["Ryann", "Victor", "Vieira", "Miranda"]);
  const [users, setUsers] = useState([
    { id: 0, name: "Ryann", age: 20 },
    { id: 1, name: "Victor", age: 21 },
    { id: 2, name: "Vieira", age: 22 },
    { id: 3, name: "Miranda", age: 23 },
  ]);

  const deleteRandom = () =>{
    const numberRandom = Math.floor(Math.random() * 4);
    console.log(numberRandom);

    setUsers((prevUsers) => {
        return prevUsers.filter((user) => numberRandom !== user.id)
    })
  }

  return (
    <div>
      <ul>
        {/* Má prática de resolver o erro de indices do React */}
        {/* Devido o indice de Victor poder ser alterado, caso Ryann for excluido */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Prática ideal */}
      {/* Normalmente receberíamos esses dados do Banco, mas realizei uma simulação local */}
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>

      <button onClick={deleteRandom}>Deletar Aleatório</button>
    </div>
  );
};

export default RenderList;
