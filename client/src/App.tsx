import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";
import StartScreen from "./components/StartScreen";


const App: React.FC = () => {
  const [data, setData] = useState<null|Object>(null);
  const [display, setDisplay] = useState<string>("meme");

  useEffect (() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message))
  }, []);

  console.log(data)

  return (
    <div className="app">
    <Header />
   
    {display === "start"? ( <StartScreen /> ) : ( <MemeGenerator /> ) }
  </div>
  );
}

export default App;
