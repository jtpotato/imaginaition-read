"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import completeText from "./completeText";
import React from "react";

/**
 *
 * @param {{ text: string, speed: number }} props
 * @returns
 */
function Renderer({ text, speed }) {
  const [renderedText, setRenderedText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setRenderedText(completeText(text, { speed, currentLength: renderedText.length }));
    }, 50)
  }, [text, renderedText, speed])

  return (
    <>
      <ReactMarkdown>{renderedText}</ReactMarkdown>
    </>
  );
}

export default Renderer;