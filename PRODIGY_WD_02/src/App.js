import { PauseCircleIcon, PlayCircleIcon, PlusCircleIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import LapResult from "./LapResult";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(0);
  const [mSecond, setmSecond] = useState(null)
  const [second, setSecond] = useState(null);
  const [minute, setminute] = useState(null);

  const [intervalId, setIntervalId] = useState(null);
  const [lap, setLap] = useState([]);

  useEffect(() => {

    if (isStart) {
      setIntervalId(setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10));

    } else {
      clearInterval(intervalId);
    };

    return () => clearInterval(intervalId);
  }, [isStart]);

  useEffect(() => {
    // isStart && setTimeout(() => setTime(time + 1), 10);

    setmSecond(Math.floor(time % 100));
    setSecond(Math.floor((time / 100) % 60));
    setminute(Math.floor(time / 6000));

  }, [time, isStart])

  const handleStart = () => {
    setIsStart(!isStart);
  };

  const handleLap = () => {
    isStart && setLap([...lap, time]);
    // console.log(lap)
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIsStart(false);
    setTime(0);
    setLap([]);
  };


  return (
    <div className="h-[100vh] flex flex-col ">
      <div className='bg-yellow-700 w-[100%] fixed top-0 z-50 h-[100%] flex flex-col justify-center'>
        <div className="text-center text-white text-4xl font-semibold p-5">Stop Watch</div>
        <div className=" h-[380px] w-fit relative mx-auto">
          <div className="flex justify-center pt-[97px]  text-6xl border-white border-4 rounded-[50%] h-[280px] w-[280px] text-white">
            <div className="flex justify-between gap-x-3 h-fit w-[170px] bg-gray-400 relative">
              <div className=" absolute -left-4">{`${minute < 10 ? '0' : ''}${minute}`}</div>
              <div className=" absolute left-[65px]">{`${second < 10 ? '0' : ''}${second}`}</div>
              <div className=" text-4xl font-semibold absolute left-[145px]">{`${mSecond < 10 ? '0' : ''}${mSecond}`}</div>
            </div>
          </div>
          {
            !isStart ? (
              <PlayCircleIcon className="h-[5.5rem] text-yellow-400 absolute top-[60%] left-[36%] bg-white rounded-[50%] cursor-pointer z-20" onClick={handleStart} />
            ) : (
              <PauseCircleIcon className="h-[5.5rem] text-yellow-400 absolute top-[60%] left-[36%] bg-white rounded-[50%] cursor-pointer z-20" onClick={handleStart} />
            )
          }
          <PlusCircleIcon className="h-[3.5rem] text-yellow-600 absolute top-[57%] left-[30px] bg-white rounded-[50%] cursor-pointer" onClick={handleLap} />

          <ArrowPathIcon className="h-[3.5rem] text-white absolute top-[55%] left-[73%] bg-yellow-600 rounded-[50%] cursor-pointer p-2 border-[6px]" onClick={handleReset} />

        </div>
      </div>

      <div className="felx flex-col align-middle bg-white h-[60vh] pt-2 relative z-10">
        <div className=" overflow-hidden mt-[450px]">
          <LapResult lap={lap} />
        </div>
      </div>
    </div>
  );
}

export default App;
