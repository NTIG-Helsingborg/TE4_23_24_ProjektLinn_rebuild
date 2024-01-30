import Iframe from 'react-iframe'


const Instagram = (size) => {
   let widgetStyle = { width: "900px", height: "900px"};
   if(size == "1x2"){
     widgetStyle = { width: "900px", height: "2000px"};
   }else if(size == "1x1"){
     widgetStyle = { width: "900px", height: "900px"};
   }
 

    return (
   <Iframe url="https://www.instagram.com/ntihelsingborg//embed"
    
      id=""
      className=""
      display="block"
      position="relative"
      scrolling='no'
      styles={widgetStyle}
      />

   )
}
export const Instagram1x1 = () => {
   return <Instagram size = "1x1"/>
}
export const Instagram1x2 = () => {
   return <Instagram size = "1x2"/>
}