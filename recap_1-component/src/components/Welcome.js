import React from "react";
import "./Welcome.css";

const Welcome = (props) => {
  const { name } = props;
  console.log(props);
  return (
    <div>
      <h2>Welcome to {name} page</h2>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Welcome;
