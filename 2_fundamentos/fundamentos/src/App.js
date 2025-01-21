//COMPONENTS
import FirstComponents from './components/FirstComponents'
import TemplateExpresion from './components/TemplateExpression'
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';

//CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponents />
      <TemplateExpresion />
      <MyComponents />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;