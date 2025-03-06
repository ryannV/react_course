import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <MyForm user={{name: "Ronaldo", email:"cr7@gmail.com" , bio:"Craque da Bola", role:"admin"}}/>
    </div>
  );
}

export default App;
