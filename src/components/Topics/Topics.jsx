import "./Topics.css";
import {
  frequencies,
  daw,
  vocalsProcessing,
  bgElement1,
  mixing,
  mixingConsole,
  mastering,
} from "../../assets/index";
import { useState } from "react";
const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What you will learn?</h2>
        <div className="content-container">
          <ul>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are Frequencies
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using the DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              Vocal Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing </li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
        </div>
        <div className="topic-image">
          <img src={currentImage} alt="" />
        </div>
      </div>
      <img src={bgElement1} alt="" className="bg-element-1" />
    </section>
  );
};

export default Topics;