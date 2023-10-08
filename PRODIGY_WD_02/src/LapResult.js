import React from 'react'
import Lap from './Lap'

function LapResult({lap}) {
  return (
    <div className='min-h-[60px]'>
          <div className='felx flex-col-reverse'>
              {lap?.map((time, idx) => <Lap key={idx + 1} id={idx + 1} lapTime={time} />)}
          </div>
    </div>
  )
}

export default LapResult;