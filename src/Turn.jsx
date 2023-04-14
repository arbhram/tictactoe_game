import React,{useState} from 'react'

function Turn() {


  const[playing, setPlaying] = useState(true)
  function Turn_1(){

    setPlaying(!playing)

  }

  return (
    <div  className='text-center'>
     <p className={`${playing?"flex":"hidden"} text-blue-900`}>Blue Turn</p> 
     <p className={`${!playing?"flex":"hidden"} text-red-700`}>Red Turn</p>
      <button onMouseEnter={()=>Turn_1(playing)} onMouseLeave={()=>Turn_1(!playing)}>Next Turn</button>
    </div>
  )
}

export default Turn
