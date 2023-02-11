import React from 'react'

export const Box = ({value, onClick}) => {
  const style = value==="X"?"text-red-600":"text-blue-600"
  return (
    <button className={`text-[5em] font-bold font-poppins  rounded-lg border border-gray-300 bg-white text-center w-[5rem] h-[5rem] leading-[5rem] ${style}`} onClick={onClick}>{value}</button>
  )
}


