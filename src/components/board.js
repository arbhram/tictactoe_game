import React from 'react'
import {Box} from "../components/box"
// import paali from "../../src/App"
export const Board = ({board, onClick, first}) => {
  
  return (
    <div >
    <div className='   grid grid-cols-3 w-fit h-fit gap-2'>
    {
      board.map((value,idx)=>{
        return(
         
          <Box key={idx} value={value}id={idx} board={board}   first={first} className="bg-red-400" onClick={()=>value===null && onClick(idx)}/>
          
          
        )
      })
    }
    </div>
    
    </div>
    
  )
}
