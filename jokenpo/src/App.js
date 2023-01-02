//css
import './App.css';

//react
import {useCallback, useEffect, useState } from "react";
import StartScreen from './components/startScreen/StartScreen';
import Game from './components/game/Game';
import GameOver from './components/gameOver/GameOver';

// setting the stages of the game
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen  />}
      {gameStage === 'game' && <Game />}
      {gameStage === 'end' && <GameOver />}
    </div>
  );
}

export default App;
