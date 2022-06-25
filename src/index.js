import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle } from "react-konva";

const App = () => {
  const handelClickStage = (e) => {
    console.log("clicked on", e.target);
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    console.log("usual click on " + JSON.stringify(pointerPosition));
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onClick={handelClickStage}
    >
      <Layer>
        <Circle x={350} y={100} radius={30} fill={"blue"} />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
