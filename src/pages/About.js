import React, { useState, useEffect } from "react";

const EasterEgg = () => {
  const [inputBuffer, setInputBuffer] = useState("");
  const secretCode = "1337";

  useEffect(() => {
    const handleKeyDown = (event) => {
      setInputBuffer((prevBuffer) => prevBuffer + event.key);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputBuffer]);

  useEffect(() => {
    if (inputBuffer.includes(secretCode)) {
      alert(
        "Peek-a-boo!! You found one of the two Easter Eggs on this website. Look around the header 'ABOUT' to find the other one. Good luck!"
      );
      setInputBuffer("");
    }
  }, [inputBuffer]);

  const changeBackgroundColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <h1 className="sign">Caroline Uthawong-Burr</h1>
      <div className="easteregg-container">
        <h1 className="easteregg" onClick={changeBackgroundColor}>
          <h3 className="about-title">ABOUT</h3>
        </h1>
        <p className="description">
          Type "1337" to find one of two Easter Eggs!
        </p>
      </div>
    </div>
  );
};

export default EasterEgg;
