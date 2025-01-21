import { useState } from 'react';
import './App.css';
import City from './assets/city.jpg';
import ConditionalHender from './components/ConditionalHender';
import ManageData from './components/ManageData';
import RenderList from './components/RenderList';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDatails from './components/UserDatails';

function App() {
  const user = "Victor";
  const [users] = useState("Vieira");

  const cars = [
    {id: 1, marca:"Ferrari", ano:2020, modelo:"XWZ", newCar:true},
    {id: 2, marca:"Lamborguini", ano:2017, modelo:"OMG XTZ", newCar:true},
    {id: 3, marca:"Jaguar", ano:2023, modelo:"FireBlast", newCar:true}
  ]

  function showAlert(){
   alert("Função executada com sucesso!");
  }

  const [message, setMessage] = useState("");

  const alterMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1>Avançando em React!</h1>

      {/* Imagem em Public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em Assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData />
      <RenderList />
      <ConditionalHender />

      {/* Props */}
      <ShowUserName name="Ryann"/>
      <ShowUserName name={user}/>
      <ShowUserName name={users}/>

      {/* Destruturing Props */}
      <CarDetails marca="Honda" modelo="Civic GTI" ano={2020}/>

      {/* Reaproveitando Components */}
      <h2>Carros Disponíveis á venda!</h2>
      <CarDetails marca="Honda" modelo="Civic GTI" ano={2020} newCar={true}/>
      <CarDetails marca="Toyota" modelo="Corola XEI" ano={2019} newCar={true}/>
      <CarDetails marca="BMW" modelo="i320" ano={2022} newCar={false}/>

      {/* Loop de Components - Usurfruindo de todas ás técnicas */}
      <h2>Pedidos Recentes</h2>
      {cars.map((car) => (
        <CarDetails marca={car.marca} ano={car.ano} modelo={car.modelo}/>
      ))}

      {/* Fragment */}
      <Fragment />

      {/* Children */}
      <Container value="First">
        <p>Conteudo inicial do arquivo App.js</p>
      </Container>
      <Container value="Second">
        <p>Conteudo secundario do arquivo App.js</p>
      </Container>

      {/* Função do Component pai para o filho */}
      <ExecuteFunction myFunction={showAlert}/>
      
      {/* State Lift */}
      <Message msg={message}/> {/* Função responsável para exibir a mensagem */} 
      <ChangeMessage alterMessage={alterMessage}/> {/* Função responsável por alterar a mensagem exibida */}

      {/* Desafio */}
      <UserDatails />
    </div>
  );
}

export default App;
