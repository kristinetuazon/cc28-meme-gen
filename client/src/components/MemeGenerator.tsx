import { response } from "express";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import LoadingScreen from './LoadingScreen';

interface Image {
  box_count: number,
  height: number,
  id: string,
  name: string,
  url: string,
  width: number,
}; 

const MemeGenerator: React.FC = () => {
const [topText, setTopText] = useState <string> ("");
const [bottomText, setBottomText] = useState < string> ("");
const [images, setImages] = useState < []| null> (null);

useEffect (() => {
    handleSetImages()
  }, [<LoadingScreen />]);


const handleSetImages = async (): Promise<any> => {
    const response = await axios('/photos');
    const responseObject = response.data.memes
    const arrImgUrl = responseObject.map((object: Image, index: number) => {
        return <div className="memeGallery__imageCell">
              <img
                src={object.url}
                className="memeGallery__image"
                key={index}
                id= {object.id}
              />
            </div>
    })
    setImages(arrImgUrl);
};

const onTextChange = (event: any) => {
    setBottomText(event.target.value)
    setTopText(event.target.value)
}

    return (
        <>
        <form action="" className="memeGallery__form">
            <input name="topText" 
            type="text" 
            value={topText}
            onChange = {onTextChange}
            />
             <input name="bottomText" 
            type="text" 
            value={bottomText}
            onChange = {onTextChange}
            />
            <button>Make Me Laugh</button>
        </form>
        <div className="memeGallery">
           {images}
        </div>
        </>
    )
}

export default MemeGenerator;