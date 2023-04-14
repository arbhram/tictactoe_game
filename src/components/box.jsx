import React from 'react'
import { useState } from 'react';

export const Box = ({ value, onClick, first, board, id }) => {

  const [HoverS, setHoverS] = useState(false)


  return (  
    <>


      <button className={`text-[5em]  font-bold font-poppins bg-transparent rounded-lg border border-gray-300  bg-white text-center w-[5rem] h-[5rem] leading-[5rem] ${first === true && HoverS === true ? "hover:bg-red-500" : HoverS === true ? "hover:bg-blue-500" : ""}  ${value === "X" ? "text-red-600 " : "text-blue-600 "}`}
        onMouseEnter={() => {

          const date = board[id];

          if (date == null) {
            setHoverS(true);
          } else {
            setHoverS(false)
          }


        }}
        onMouseLeave={() => {
          setHoverS(false)
        }}
        onClick={() => {
          setHoverS(false);
          onClick();
        }}>{value}</button>

    </>


  )
}


