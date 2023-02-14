import React from 'react'

export const Display = ({score, first}) => {
  const {xScore, oScore} = score;
  return (
    <div className='mt-10 w-fit h-fit flex justify-center items-center gap-5 shadow-md shadow-gray-500  rounded-lg'>
      <div className={`flex flex-col h-full items-center p-2 ${first?"border-b-[10px]  border-red-600":"border-none"} `}    style={{borderRadius:"0px 0px 0px 8px"}}>
        <p className='text-2xl font-poppins font-medium text-red-600'>X Score</p>
        <p className='text-xl font-medium'>{xScore}</p>
      </div>
      <div className={`flex flex-col h-full items-center p-2 ${!first?"border-b-[10px]  border-blue-700":"border-none"} `} style={{borderRadius:"0px 0px 8px 0px"}}>
        <p className='text-2xl font-poppins font-medium text-blue-600'>O Score</p>
        <p className='text-xl font-medium '>{oScore}</p>
      </div>
    </div>
  )
}
