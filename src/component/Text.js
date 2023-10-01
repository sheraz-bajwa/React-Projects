import React from "react";
import Typewriter from "react-simple-typewriter";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Text1() {
  const [typeEffect] = useTypewriter({
    words: ["Mobile App developer",   "Flutter developer", "How may i help you"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      Hi, My name is Sheraz Bajwa
      <div className="haq"> and i am a passionate</div>
      <div className="haq">
        <span>{typeEffect}</span>
      </div>
    </div>
  );
}
