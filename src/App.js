import React, { useState } from "react";
import { Display } from "./components/display"
import { Board } from "./components/board"


function App() {

  const Win = [ // This Check For the win posiibilities Either horizontal either vertical or diagonal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  const [first, setFirst] = useState(true) // this set for the turn whether its blue or red turn
  const [board, setBoard] = useState(Array(9).fill(null)) // this set value (X, O ) to pass on board acc to the turn
  const [score, setScore] = useState({  // this sets the score acc to the win 
    xScore: 0,
    oScore: 0
  })
  const [gameOver, setGameOver] = useState(false) // this for gameOver either in win oe tie
  const handleClickBox = (id) => {
    const updatedvalue = board.map((value, idx) => {
      if (id === idx) {
        return first === true ? "X" : "O" // this check for the (X, O) turn id X turn pass X or pass O in the box 
      }
      else {
        return value;
      }
    })
    const check = Winner(updatedvalue);
    if (check) {
      if (check === "X") {           // if X win X gets 1 score esle O will get
        let { xScore } = score;
        xScore += 1
        setScore({ ...score, xScore })
      }
      else {
        let { oScore } = score;
        oScore += 1
        setScore({ ...score, oScore })
      }
    }

    setBoard(updatedvalue)
    setFirst(!first) // this oppose the turn if X play oppose for O 
  }
  const [popup, setPopup] = useState(false)
  const [popupwinner, setPopupwinner] = useState(null)



  function Winner(board) {
    for (let i = 0; i < Win.length; i++) {

      const [x, y, z] = Win[i]


      if (board[x] && board[x] === board[y] && board[y] === board[z]) {  // this check for the win probality

        setPopupwinner(board[x])
        setGameOver(true);
        setPopup(true)
        return board[x];
      }
    }
  }



  function GameReset() {  // this is for reset button
    setPopup(false)
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return ( // thhis for the design 
    <div className="font-poppins">
     <div className={`fixed  z-10 top-1/2 left-1/2 transform transition-all duration-300 -translate-x-1/2  ${popup ? ' -translate-y-1/2' : '-translate-y-[900px]'}`}>
  <div className="bg-white rounded-lg p-52 shadow-custom text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{popupwinner} wins!</h2>
    <button className="main-button" onClick={GameReset}>Play Again</button>
  </div>
</div>

      <div>
        <p className="text-4xl font-oregano font-semibold text-center py-10">Tic Tac Toe</p>
      </div>
      <div className='w-fit h-fit mx-auto flex flex-col gap-5 justify-center items-center'>
        <Display className="" score={score} first={first} />
        <Board board={board} first={first} onClick={gameOver ? GameReset : handleClickBox} />

        <button onClick={GameReset} className=" second-button ">Reset</button>
      </div>
      {/* <Turn/> */}
    </div>
  );
}

export default App;

