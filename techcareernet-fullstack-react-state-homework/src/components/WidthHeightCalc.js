import React, { useState } from "react";

function WidthHeightCalc() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const changeSize = () => {

    const newWidth = parseInt(document.getElementById("widthInput").value);
    const newHeight = parseInt(document.getElementById("heightInput").value);

    if (!isNaN(newWidth) && !isNaN(newHeight)) {
      setWidth(newWidth);
      setHeight(newHeight);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <input id="widthInput" type="number" placeholder="Width" />
          <input id="heightInput" type="number" placeholder="Height" />
        </div>
        <div style={{
            marginBottom: "30px",
        }}>
          <button onClick={changeSize}>Calc</button>
        </div>
        <div
          style={{
            width: width + "px",
            height: height + "px",
            backgroundColor: "lightblue",
            border: "5px solid red",
          }}
        >
          Bu divin boyutu {width}x{height} piksel.
        </div>
      </div>
    </>
  );
}

export default WidthHeightCalc;
