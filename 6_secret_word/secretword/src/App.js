// CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import {wordsList} from './data/words';

// Components
import StartScreen from './components/StartScren';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name:"end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    // Recebendo as categorias
    const categories = Object.keys(words);

    // Pegando categoria e palavra da categoria de forma aleatória
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }

  const startGame = () => {
    // Recebendo palavra e categoria
    const {word, category} = pickWordAndCategory();

    // Criando vetor com letras da palavra e colocando como minusculo
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // Setando as informações
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);
    setGameStage(stages[1].name);
  }

  // process words
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
