"use client";

import useWindowSize from "../actions/windowSize";
import { GreenButton } from "@/components/GreenButton";
import { useState } from "react";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export default function Home() {
  const [count, setCount] = useState(0);
  const beglist = [
    "no",
    "are you sure?",
    "really sure?",
    "think again!",
    "last chance",
    "surely not?",
    "you might regret this! >:(",
    "give it another thought",
    "are you absolutely certain?",
    "this could be a mistake!",
    "have a heart!",
    "don't be so cold",
    "change of heart?",
    "wouldn't you reconsider?",
    "is that your final answer?",
    "your breaking my heart :(",
    "catch me if you can >:(",
  ];

  //TODO: get the dynamic width of element to plug in this
  const style = {
    top: `${getRandomInt((useWindowSize()?.height ?? 40) - 40)}px`,
    left: `${getRandomInt((useWindowSize()?.width ?? 203.27) - 203.27)}px`,
  };

  return (
    <div className="flex flex-col justify-center items-center	">
      <div className="w-fit">
        <img className="pt-4" src="\hehehehe.png" alt="cute meme" />
      </div>
      <div className="flex flex-row gap-4">
        <GreenButton
          size={count < beglist.length - 1 ? count : beglist.length - 1}
        />
        <button
          id="RedButton"
          className={
            (count < beglist.length - 1 ? "flex " : "absolute ") +
            " self-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all ease-in-out"
          }
          type="button"
          onClick={() => setCount(count + 1)}
          onMouseOver={
            count < beglist.length - 1 ? () => {} : () => setCount(count + 1)
          }
          style={count < beglist.length - 1 ? {} : style}
        >
          {beglist[count < beglist.length - 1 ? count : beglist.length - 1]}
        </button>
      </div>
    </div>
  );
}
