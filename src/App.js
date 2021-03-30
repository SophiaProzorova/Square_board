import {useEffect, useMemo, useState} from 'react'
import SquareBlock from './components/SquareBlock'
import Selection from './components/Selection'
import axios from 'axios'
import './App.css';

function App() {

  const [squares, setSquares] = useState([{id:'Normal mode', field:5}, {id:'Medium mode', field: 10}, {id:'Strength mode',field:15}]);
  const [board, setBoard] = useState([]);
  
  const [currMode, setCurrMode] = useState({})
  const [isChoosen, setIsChoosen] = useState (false)

  const setBoardCount = (count) =>{
    const array = new Array (count * count).fill('');
    setBoard(array)
    setIsChoosen(true)
  }
  useEffect(() => {
    if (isChoosen&&currMode) setBoardCount(currMode);
  }, [isChoosen])

  return (
    <div className="App">
      <Selection squares={squares} setCurrMode={setCurrMode} setIsChoosen={setIsChoosen}/>
      {
        isChoosen ? (
          <div>
          < SquareBlock countSquare = { currMode } boardArray = {board} />

          </div>
        ) : null
      }
    </div>
  );
}

export default App;
