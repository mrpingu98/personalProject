import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface UseRefImageChildProps {
  url: string;
}

//This is an example of using useRef to directly access DOM elements 
//you can set the ref to a HTML element (in this case, an image element)
//but whenever this ref is set, it doesn't cause a re-render

const UseRefImageChild: React.FC<UseRefImageChildProps> = React.memo(
  ({ url }) => {

    const [inView, setInView] = React.useState(false)
    const imageRef = React.useRef<HTMLImageElement | null>(null);

    console.log(imageRef.current)


    const isImageVisibleInViewport = () => {
      const rectangle =
        imageRef.current != null && imageRef.current.getBoundingClientRect();
      if (rectangle) {
        return rectangle.top >= 0 && rectangle.bottom <= window.innerHeight;
      }
      else {
        return false
      }
    };
    //if the ref is not null (i.e., has a dom element set for it, coming from the ref variable on the img element), check if it's fully within the viewport or not 
    //checks if top of image is at or below the top of the viewport
    //checks if bottom of image is at or below the bottom of the viewport
    //if it returns true, it means the image is fully in the viewport 
    //if it returns false, it means the image is not fully in the viewport 

    const scrollHandler = () => {
        setInView(isImageVisibleInViewport())
    }
    //everytime someone scrolls, check whether the image fully is in the viewport or not 

    React.useEffect(() => {
        setInView(isImageVisibleInViewport()) //on load of page, check if image is in viewport 
        window.addEventListener("scroll", scrollHandler) //add an event listener on the load of the page (that then exists for whole time it's not re-rendered?) - when user scrolls, call this function 
        return () => {
            window.removeEventListener("scroll", scrollHandler) //when it re-renders, remove this event listener 
        }
        
    },[])

    const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)"; //if image in view no grayscale, if not in view greyscale

    return (
      <>
        <img src={url} width={400} height={400} ref={imageRef} style={{filter: `${grayScale}`}}/>
      </>
    );
  }
);
export { UseRefImageChild };
