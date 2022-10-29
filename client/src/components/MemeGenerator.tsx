import { response } from "express";
import React, { useState, useEffect } from "react";

const MemeGenerator: React.FC = () => {
const [upText, setUpText] = useState <string | null> (null);
const [bottomText, setButtonText] = useState < string | null> (null);
const [photo, setImage] = useState < Object| null> (null);

useEffect(()=> {
    handleImageFetch();
  }, []);

const handleImageFetch =  () => {
    fetch('https://api.imgflip.com/get_memes')
    .then ((res) => res.json())
    .then ((res) => {
        const { memes } = res.data
        console.log(memes)
        console.log(memes[0])
        setImage(memes)
    })
}




    return (
        <h1>Meme Generator</h1>
    )
}

export default MemeGenerator;