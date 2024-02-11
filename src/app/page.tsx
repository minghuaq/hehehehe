"use client";

import { GreenButton } from "@/components/GreenButton";
import { useState } from "react";

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
  ];

  return (
    <div className="flex flex-col justify-center items-center	">
      <div className="w-fit">
        <img className="pt-4" src="\hehehehe.png" alt="cute meme" />
      </div>
      <div className="flex flex-row gap-4">
        <GreenButton size={count}/>
        <button
          className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          {beglist[count < beglist.length - 1 ? count : beglist.length - 1]}
        </button>
      </div>
    </div>
  );
}
