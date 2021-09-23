import React from "react";
import Button from "./components/Button";
import Description from "./components/Description";
import Header from "./components/Header";
import List from "./components/List";
import Wheel from "./components/Wheel";

function App() {

const names = ["Harrison ", "John ", "James ", "Jack ", "Jello ", "Aaron ", "Caleb ", "Matt ", "June ", "Kate "];
const randomNames = names[Math.floor(Math.random() * names.length)];



  return (
    <div>
      <Header />
      <div className='app'>
        <div className='left-container'>
          <Description />
          <List text={names} />
          <Button />
        </div>
        <Wheel rand={randomNames} />
      </div>
    </div>
  );
}

export default App;
