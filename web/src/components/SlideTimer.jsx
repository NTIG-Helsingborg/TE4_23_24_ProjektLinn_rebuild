import React, { useState, useRef, useEffect } from "react";

export const SlideTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const minutesInputRef = useRef();
  const secondsInputRef = useRef();
  const timerRef = useRef();

  const inputHandler = (e) => {
    const value = parseInt(e.target.value, 10) || 0;

    if (e.target.name === "minutes") {
      setMinutes(value);
    } else if (e.target.name === "seconds") {
      setSeconds(value);
    }
  };

  const convertToSeconds = () => {
    return minutes * 60 + seconds;
  };

  const startTimer = () => {
    timerRef.current = setInterval(countDown, 1000);
  };

  const countDown = () => {
    let c_seconds = convertToSeconds();

    if (c_seconds) {
      setSeconds((prevSeconds) => (prevSeconds ? prevSeconds - 1 : 59));

      if (c_seconds % 60 === 0 && minutes) {
        setMinutes((prevMinutes) => prevMinutes - 1);
      }
    } else {
      clearInterval(timerRef.current);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    minutesInputRef.current.value = 0;
    secondsInputRef.current.value = 0;
    clearInterval(timerRef.current);
  };

  return (
    <>
      <div className="">
        <div className="grid grid-cols-2 gap-4">
          <div className="justify-center items-center space-x-4">
            <span>Min</span>
            <div className="max-w-5">
              <input
                ref={minutesInputRef}
                type="number"
                placeholder={0}
                name="minutes"
                onChange={inputHandler}
              />
            </div>
          </div>
          <div className="justify-center items-center space-x-4">
            <span>Sec</span>
            <div className="max-w-5">
              <input
                ref={secondsInputRef}
                type="number"
                placeholder={0}
                name="seconds"
                onChange={inputHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <div className="flex justify-center items-center mt-1">
          <h1>
            {" "}
            Timer {minutes} : {seconds < 10 ? `0${seconds}` : seconds}{" "}
          </h1>
        </div>
      </div>
    </>
  );
};
