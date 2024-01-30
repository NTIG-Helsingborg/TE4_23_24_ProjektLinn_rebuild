import { useEffect, useState } from "react";
import { EditContainer } from "../components/DisplayContainer"; // Gemensamma container som används för att visa och editera slides
import { PopUpTimer } from "../components/PopUpTimer"; // Fixa styling på det och sägg till att den ska bete sig som en popup
import { SlideObject } from "../components/SlideObject"; // Component som representerar en slide
import { useSlides } from "../lib/hooks/useSlides"; // Backend hook
import { useNewSlide } from "../lib/hooks/useSlides"; // Backned hook
import { Layout } from "../components/Layout";
import { useNewWidgets } from "../lib/hooks/useWidgets";
import * as images from '../assets/widgetsShowcase/WidgetShowcase';
import {
  Layout1SVG,
  Layout2SVG,
  Layout3SVG,
} from "../assets/layoutPreviews/layoutSVGs";

export const AdminPage = () => {
  const newSlideMutation = useNewSlide();
  const newWidgetMutation = useNewWidgets();
  const { data: slides } = useSlides();
  const [layoutSelectToggle, setlayoutSelectToggle] = useState(false);
  const [widgets, setWidgets] = useState([]);
  const [currDiv, setCurrDiv] = useState(null); // [div1, div2, div3, div4]
  const [divImages, setDivImages] = useState({
    div1: null,
    div2: null,
    div3: null,
    div4: null,
  });
  const [widgetID, setWidgetID] = useState({
    div1: null,
    div2: null,
    div3: null,
    div4: null,
  });

  

  const updateFilterWidget = (size,divId) => {
    setWidgets(getWidgets(size));
    setCurrDiv(divId);
  };
  const updateDivImage = (imagePath) =>{
    setDivImages(prevImages => ({
      ...prevImages,
      [currDiv]: imagePath,
    }));
  }



  async function addSlide() {
    newSlideMutation.mutate({
      index: 0,
      interval: 30,
      widget_one: widgetID.div1,
      widget_two: widgetID.div2,
      widget_three: widgetID.div3,
      widget_four: widgetID.div4
    });
  }
  async function addWidget(_type, _data){
    newWidgetMutation.mutate({
      type: _type,
      data: _data
    }, {
      onSuccess: (value) => {
        console.log("Widget added", value);
        setWidgetID(prevIDs => ({
          ...prevIDs,
          [currDiv]: value.id,
        }));
      },
      onError: () => {
        console.log("Widget failed to add");
      }
    });
  }
    //Function that takes in a layout size and returns all widget that are compatible with the size

  function getWidgets(size) {
    const widgets = {
      "1x1": [images.CountDownWidget1x1, images.TrafficWidget1x1],
      "2x1": [images.CountDownWidget2x1, images.TrafficWidget2x1, images.WeatherWidget2x1],
      "1x2": [images.CountDownWidget1x2, images.TrafficWidget1x2, images.WeatherWidget1x2]
    };
  
    return widgets[size] || [];
  }

  

  function handleWidgetClick(imagePath) {
    const widgetType = imagePath.split('/').pop().split('.')[0];
    console.log(`Widget clicked: ${widgetType}`);
    let data;
    // if (widgetType === "CountDownWidget1x1")  ask user to input a date
    if(widgetType === "CountDownWidget1x1" || widgetType === "CountDownWidget1x2" || widgetType === "CountDownWidget2x1"){
      const date = prompt("Please input a date in the format YYYY-MM-DD");
      console.log(`Date entered: ${date}`);

      if(date != null){
        //Add the widget to the corresponding div
        data = {datetime:date};

      }
    }else  if(widgetType === "TrafficWidget1x1" || widgetType === "TrafficWidget1x2" || widgetType === "TrafficWidget2x1"){
      const value = prompt("Please input a date a values: [stad, region, tåg, rotatera]");

      if(value != null){
        data = {divId:value};
      }
    }
    addWidget(widgetType, JSON.stringify(data));
    updateDivImage(imagePath);
    

  }
console.log(widgetID);
  

  return (
    <>
      <div className="flex h-[100vh] w-[100vw] p-6 justify-between">
        
        {/* item-1 - Slidelist*/}
        
        <div
          id="SlideList"
          className="flex flex-col w-[15vw] h-full justify-center"
        >
          <div id="SlideLayouts" className="overflow-y-scroll">
            {slides && slides.length > 0 ? (
              slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex my-4 lg:flex-row flex-col-reverse justify-center "
                >
                  <SlideObject id={slide.id} />
                </div>
              ))
            ) : (
              <div className="mx-auto font-bold "> No Slides.. </div>
            )}
          </div>
           {/* 
          Add Slide Button. Sägg till att hitta ett sätt där man kan centrera add slide knappen när man ändrar res
          <div
            id="AddSlideButton"
            className=" mb-6 w-[15vw] pr-10 bg-white flex justify-evenly"
          >
            <button
              title="Add New"
              className="flex items-center justify-center w-full h-10 my-2 duration-300 outline-none cursor-pointer group hover:rotate-90"
              onClick={() => {
                setlayoutSelectToggle(!layoutSelectToggle);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-10 duration-300 stroke-purple-400 fill-none group-hover:fill-purple-200 group-active:stroke-purple-200 group-active:fill-purple-600 group-active:duration-0"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                ></path>
                <path d="M8 12H16" strokeWidth="1.5"></path>
                <path d="M12 16V8" strokeWidth="1.5"></path>
              </svg>
            </button>
          </div>*/}
            </div>

        {/*item-2 - Preview + Edit*/}
        <div className="border-4 xl:w-[30vw] w-[40vw]  aspect-[9/16] my-auto rounded-[12px]">
          <button className="bg-blue-500 m-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addSlide()}>SAVE</button>
          <EditContainer />
          <Layout updateFilterWidget={updateFilterWidget} divImages={divImages}/>

        </div>

        {/* item-3 - Widget Editor */}
        <div className="grid-cols-1 grid-rows-4 xl:w-[25vw] w-[40vw]"> 
          {widgets?.length > 0 ? (
            widgets.map((image, index) => (
              <div key={index} className="w-full ">
                <img src={image} alt="widget" className="w-full h-auto duration-100 cursor-pointer rounded-lg object-contain my-10 hover:scale-105 shadow-lg shadow-gray-200" onClick={() => handleWidgetClick(image)} />    
              </div>
            ))
          ) : (
            <p>Choose a container</p>
          )}
        </div>

        {/* Layout selector popup 
        {layoutSelectToggle && (
          <div className="flex justify-center items-center z-10 fixed top-6 right-6 xl:w-[40vw] w-[30vw] h-[calc(100%-theme(space.12))] bg-white">
            <div className="grid gap-4 2xl:grid-cols-3 lg:grid-cols-3 grid-cols-2">
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout1SVG />
              </button>
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout2SVG />
              </button>
              <button
                onClick={() => addSlide()}
                className="flex justify-center items-center w-[11vw] xl:w-[9vw] lg:w-[10vw] aspect-[9/16]"
              >
                <Layout3SVG />
              </button>
            </div>
          </div>
        )}*/}
      </div>
    </>
  );
};

/**
 * @type {import('react-router-dom').RouteObject}
 */
// eslint-disable-next-line react-refresh/only-export-components
export const adminRoute = {
  path: "/admin",
  element: <AdminPage />,
};



