import "./styles.css";
import { useState } from "react";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState();
  const [coordY, setCoordY] = useState();
  // click event
  const handleClick = (event) => {
    console.log("event", event);
    console.log("event type ", event.type);
    console.log("event target ", event.target);
    console.log("event current target ", event.currentTarget);
  };
  // doubleClick event
  const handleDoubleClick = (even) => {
    console.log("event targetId ", even.target.id);
    console.log("event target Inner Text ", even.target.innerText);
  };

  // mouseMove event

  const handleMouseMove = (eve) => {
    console.log("event offset", eve.nativeEvent.offsetX);
    // setCoordX(eve.nativeEvent.offsetX);
    // setCoordY(eve.nativeEvent.offsetY);
    setCoordX(eve.pageX);
    setCoordY(eve.pageY);
  };
  const handleMouseDown = (e) => {
    console.log("event offset", e.target.draggable);
    e.target.draggable = true;
  };

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X</span> and Y
      </p>
      <p>
        <span>
          {coordX} and {coordY}
        </span>{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li onMouseDown={handleMouseDown}>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
