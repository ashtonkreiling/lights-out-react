import './App.css';
import Square from './Square';
import { useState } from 'react';


function App() {
  const [lights, setLights] = useState([...Array(36).fill(0).map(x => (Math.random() > 0.5))])
  const [win, setWin] = useState(false)
  function handleClick(i) {
    console.log(i);
    let topNeighbor = i-6;
    let bottomNeighbor = i+6;
    let toUpdate = [topNeighbor, bottomNeighbor, i];
    if (i % 6 !== 0) {
      let rightNeighbor = i-1;
      toUpdate.push(rightNeighbor);
    }
    if (i % 6 !== 5) {
      let leftNeighbor = i+1;
      toUpdate.push(leftNeighbor);
    }
    let newLights = lights.slice();
    for (let j in toUpdate) {
      if (0 <= toUpdate[j] && toUpdate[j] <= 35) {
        newLights[toUpdate[j]] = !lights[toUpdate[j]];
      }
    }
    setLights(newLights);
    if (newLights.every(function (el) {
      return el === false;
    })) {
      setWin(true)
    }
  }
  let status;
  let instructions;
  if (win) {
    status = 'You Won!'
    instructions = 'Refresh to Play Again'
  } else {
    status = ''
    instructions = ''
  }
  return (
    <div className='gameContainer'>
      <h1>Lights Out</h1>
      <div className='gameBoard'>
        {lights.map((light, index) => <Square key={'square_'+index} isLit={light} onClick={() => handleClick(index)}></Square>)}
      </div>
      <h3>{status}</h3>
      <p>{instructions}</p>
    </div>
  );
}

export default App;
