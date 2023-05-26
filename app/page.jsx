"use client";

import React, { useState } from "react";
import Renderer from "./renderer";
import DonateText from "./donateText";

const Read = () => {
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
          className="foreground outline-none border-none resize-none rounded-xl h-24 p-4 text-white"
        />
        <input type="range" min={1} max={200} onInput={handleSpeedChange} className="slider" />
        <DonateText />
      </div>
      <div className="foreground ml-8 w-full text-white font-sans rounded-xl p-4">
        <Renderer text={inputText} speed={speed} />
      </div>
    </div>
  );
};

export default Read;