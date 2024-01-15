import React from "react";
import ntiLogo from "../assets/ntiLogo.svg";

const size = "1x1";

export const CountdownWidget = () => {
  return (
    <>
      <div className="countdownTopTextDiv">
        <h1 className="countdownTopText">{}Jul-Lan</h1>
      </div>
      <div className="countdownCountdownDiv"></div>
      <div className="countdownFooter bottom-0 flex justify-center width: 100%;">
        <img src={ntiLogo} alt="NTI Gymnasiet" />
      </div>
    </>
  );
};
