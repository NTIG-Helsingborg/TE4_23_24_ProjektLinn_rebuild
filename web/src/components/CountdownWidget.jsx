import React from "react";
import ntiLogo from "../assets/ntiLogo.svg";

const size = "1x1";

export const CountdownWidget = () => {
  if (size === "1x1") {
    return (
      <>
        <div className="countdownDiv aspect-square flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex items-center justify-center">
            <div className="countdownNumbers">
              <p className="text-[7rem] font-bold">10:17:10:56</p>
            </div>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-8/12" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>Something is wrong</h1>
      </div>
    );
  }
};
