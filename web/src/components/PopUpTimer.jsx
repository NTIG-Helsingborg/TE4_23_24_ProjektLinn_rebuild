import { useState } from "react";

// Måste importera timer component
// fixa styling på popup
export const PopUpTimer = () => {
  const [popUpTimer, setPopUpTimer] = useState(false);

  const togglePopUp = () => {
    setPopUpTimer(!popUpTimer);
  };

  const closePopUp = () => {
    setPopUpTimer(false);
  };

  if (popUpTimer) {
    document.body.classList.add("active-TogglePopUptimer");
  } else {
    document.body.classList.remove("active-TogglePopUptimer");
  }

  return (
    <>
      <div className="z-10">
        <button onClick={togglePopUp} className="bg-green-500">
          Open
        </button>

        {popUpTimer && (
          <div className="bg-red-500" onClick={closePopUp}>
            <div
              onClick={(e) => e.stopPropagation()}
              className="hover:scale-1.5"
            >
              <h2>this is a PopUp test</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eius facere ut neque
              </p>
              <button onClick={closePopUp} className="ring ring-pinq-500">
                Close!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
