import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import StartScreen from "./components/StartScreen";



const App: React.FC = () => {
  const [display, setDisplay] = useState<string>("meme");


  return (
    <div className="app">
    <Header/>
   
    {display === "start"? ( <StartScreen /> ) : ( <MemeGenerator /> ) }
  </div>
  );
}

export default App;
