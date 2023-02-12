import React,{useState} from "react";
import {Display} from "./components/display"
import {Board} from "./components/board"

function App() {

  const Win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]




  const[first, setFirst]=useState(true)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [score, setScore] = useState({
     xScore:0,
     oScore:0})
  const [gameOver, setGameOver] = useState(false)
 const handleClickBox=(id)=>{
  const updatedvalue = board.map((value,idx)=>{
    if (id===idx){
      return first === true?"X":"O"
    }
    else{
      return value;
    }
  })

  const check = Winner(updatedvalue);
  if(check){
    if(check==="X"){
      let {xScore} = score;
      xScore+=1
      setScore({...score, xScore})
      
    }
    else{
      let {oScore} = score;
      oScore+=1
      setScore({...score, oScore})
      
    }
   
  }
  console.log(score)
  
  
  setBoard(updatedvalue)
  setFirst(!first)
 }
const[popup, setPopup] = useState(false)
const[popupwinner, setPopupwinner] = useState(null)
 function Winner(board){
  for(let i = 0; i < Win.length; i++){
  
  const [x,y,z] = Win[i]

  if (board[x]&&board[x]===board[y] && board[y]===board[z]){
    console.log(board[x])
    setPopupwinner(board[x])
    setGameOver(true);
    setPopup(true)
    return board[x];  
  }
}
 }

 function GameReset(){
  setPopup(false)
  setGameOver(false)
  setBoard(Array(9).fill(null))
 }

  return (
    <>
    
    <div  className={`w-fit  h-fit px-20 py-10 fixed mx-auto  transition-all duration-300 ${popup?"xl:top-[200px] xl:left-[725px] left-[51px] top-[100px]":"-top-[110px] xl:left-[725px] left-[51px]"} bg-slate-200 text-2xl font-medium rounded-lg`}>
      {popupwinner} win
    </div>
    <div className='w-fit h-fit mx-auto flex flex-col gap-5 justify-center items-center'>
      <Display className="" score={score} first={first}/>
    <Board board={board} onClick={gameOver? GameReset: handleClickBox}/>
    
    <button onClick={GameReset} className="px-2 py-1 bg-gray-300 rounded-lg  w-52 text-2xl font-medium">Reset</button>
    </div>
    </>
    
  );
}

export default App;
