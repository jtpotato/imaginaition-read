"use client";

import React, { useState } from "react";
import Renderer from "./renderer";
import DonateText from "./donateText";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [speed, setSpeed] = useState(8);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value / 10);
  }

  return (
    <div className="flex flex-row p-4">
      <div className="flex flex-col space-y-4">
        <textarea
          onInput={handleInputChange}
          placeholder="Your notes go here..."
          className="outline-none border-none bg-neutral-800 resize-none rounded-xl h-24 p-4 text-white"
        />
        <input type="range" min={1} max={200} onInput={handleSpeedChange} />
        <DonateText />
      </div>
      <div className="ml-8 w-full">
        <Renderer text={inputText} speed={speed} />
      </div>
    </div>
  );
};

export default Home;
