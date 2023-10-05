import React from "react";
import Typewriter from "react-simple-typewriter";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Text1() {
  const [typeEffect] = useTypewriter({
    words: ["Mobile App developer",   "Flutter developer", "UI & UX Designer" , "React JS ","How may i help you"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
     <div className="tex">Hi, My name is Sheraz Bajwa</div> 
      <div className="haq"> and i am a passionate</div>
      <div className="haq">
        <span className="texttt">{typeEffect}</span>
      </div>
    </div>
  );
}
