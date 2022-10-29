import { response } from "express";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const MemeGenerator: React.FC = () => {
const [upText, setUpText] = useState <string | null> (null);
const [bottomText, setButtonText] = useState < string | null> (null);
const [images, setImages] = useState < []| null> (null);

useEffect (() => {
    handleSetImages()
  }, []);

  interface Image {
    box_count: number,
    height: number,
    id: string,
    name: string,
    url: string,
    width: number,
}; 

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

    return (
        <div className="memeGallery">
           {images}
        </div>
    )
}

export default MemeGenerator;