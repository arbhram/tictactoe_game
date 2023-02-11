import React from 'react'
import {Box} from "../components/box"

export const Board = ({board, onClick, score}) => {
  return (
    <div >
    <div className='   grid grid-cols-3 w-fit h-fit gap-2'>
    {
      board.map((value,idx)=>{
        return(
          <>
          <Box value={value} onClick={()=>value===null && onClick(idx)}/>
          
          </>
        )
      })
    }
    </div>
    
    </div>
    
  )
}
