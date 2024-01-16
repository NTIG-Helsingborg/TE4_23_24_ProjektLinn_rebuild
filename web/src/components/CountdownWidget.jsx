import React from "react";
import ntiLogo from "../assets/ntiLogo.svg";

const size = "2x1";

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
  } else if (size === "1x2") {
    return (
      <>
        <div className="countdownDiv aspect-[1/2] flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex-col flex justify-center">
            <table className="mt-40">
              <tr>
                <td>
                  <h3 className="text-right text-[9rem] ml-[30%] font-bold">
                    160
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Dagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    15
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Timmar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    05
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Minuter</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h3 className="text-right	text-[9rem] ml-[30%] font-bold">
                    38
                  </h3>
                </td>
                <td>
                  <p className="text-6xl ml-10">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-8/12" />
          </div>
        </div>
      </>
    );
  } else if (size === "2x1") {
    return (
      <>
        <div className="countdownDiv aspect-[2/1] flex flex-col">
          <div className="countdownTopTextDiv flex justify-center mt-10">
            <h1 className="countdownTopText text-center text-8xl">Jul-Lan</h1>
          </div>
          <div className="countdownCountdownDiv flex-grow flex-col flex justify-center text-center">
            <table className="table-fixed ml-[10%] mr-[10%]">
              <tr>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">160</h3>
                  <p className="text-2xl">Dagar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">15</h3>
                  <p className="text-2xl">Timmar</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">05</h3>
                  <p className="text-2xl">Minuter</p>
                </td>
                <td className="w-3/12">
                  <h3 className="text-9xl font-semibold">30</h3>
                  <p className="text-2xl">Sekunder</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="countdownFooter mb-10">
            <img src={ntiLogo} alt="NTI Gymnasiet" className="mx-auto w-4/12" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Something went wrong, gridsize does not exist</h1>
      </>
    );
  }
};
