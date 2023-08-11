import React, { useState } from "react";
import "./Upload.css";
import logo from "./LogoWithoutBg.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Upload() {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");
  const [area, setArea] = useState({
    background: localStorage.getItem("bg") || "#002c42",
  });

  const speaker_on = (text) => {
    const talk = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(talk);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      speaker_on(fileContent);
    }
  };

  const inputColorEvent = (e) => {
    let color = e.target.value;
    localStorage.setItem("bg", color);
    setArea({
      background: color,
    });
  };

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileName(file.name);
      setFileContent(reader.result);
      speaker_on(reader.result); // Read file content using speech synthesis
    };
    reader.onerror = () => {
      toast.error("You cannot upload file formats other than .txt");
    };
  };

  return (
    <section>
      <div className="context">
        <div className="parent">
          <img onClick={handleReload} id="logo" src={logo} alt="logo" />
          <div style={{ marginTop: "3.5rem" }} className="shower">
            {fileContent}
          </div>
          <input
            onChange={handleFileChange}
            className="input_file"
            type="file"
            accept=".txt"
            onKeyPress={handleKeyPress}
            placeholder="Select the FIle"
          />
          <p>
            File Name:
            <span style={{ color: "red", fontWeight: "bold" }}>{fileName}</span>
          </p>
          <button onClick={() => speaker_on(fileContent)} className="btn">
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
      <ToastContainer />
    </section>
  );
}

export default Upload;
