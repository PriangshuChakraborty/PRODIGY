import React from 'react'

function Lap({lapTime, id}) {

  return (
    <div className='flex justify-center text-2xl text-center p-1 gap-10'>
        <div>Lap {id}</div>
          <div>{Math.floor(lapTime / 6000)}: {Math.floor((lapTime / 100) % 60)} : {Math.floor(lapTime % 100)}</div>
    </div>
  )
}

export default Lap