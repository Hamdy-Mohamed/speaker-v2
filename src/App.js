import React, { useState } from "react";
import "./App.css";
import logo from "./LogoWithoutBg.svg";
// import axios from 'axios';

function App() {
  const [type, setType] = useState("You Are Always beautiful");

  const typeEvent = (e) => {
    setType(e.target.value);
  };

  const speaker_on = () => {
    const talk = new SpeechSynthesisUtterance(type);
    speechSynthesis.speak(talk);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      speaker_on();
    }
  };

  let [area, setArea] = useState({
    background: localStorage.getItem("background") || "#4e54c8",
  });
  let inputColorEvent = (e) => {
    let color = e.target.value;
    localStorage.setItem("background", color);
    setArea({
      background: color,
    });
  };

  return (
    <section>
      <div className="context">
        <div className="parent">
          <img onClick={handleReload} id="logo" src={logo} alt="logo" />
          <div className="shower">{type}</div>
          <input onChange={typeEvent} type="text" onKeyPress={handleKeyPress} />
          <button onClick={speaker_on} className="btn">
            Listen
          </button>
          <input
            onChange={inputColorEvent}
            className="input_color"
            type="color"
          />
          <div>{area.background}</div>
        </div>
      </div>
      <div style={{ background: area.background }} className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <img src={logo} alt="img" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default App;
