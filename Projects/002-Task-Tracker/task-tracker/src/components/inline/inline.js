import React from "react";
import { myStyles2 } from "./style";

// const myStyles = {
//   paragraf: {
//     color: "blue",
//     fontSize: "2rem",
//     fontWeight: "bolder",
//   },
//   seconddiv: {
//     backgroundColor: "#b0b0b0",
//   },
// };

const Inline = () => {
  return (
    <div style={{ backgroundColor: "red", color: "white" }}>
      <h1 style={{ backgroundColor: "yellow", color: "black" }}>
        Hello from Inline Styling
      </h1>
      <p style={myStyles2.paragraf}>Inline styling in react</p>
      <div style={myStyles2.seconddiv}>
        <p>Second Div</p>
      </div>
      <div className="cssDiv">
        <p>CSS StyleSheet</p>
      </div>
    </div>
  );
};

export default Inline;
