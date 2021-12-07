import React from "react";
import "./StyleSheet.css";

function StyleSheet(props) {
  return (
    <div>
      <img
        className="logo"
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header">Clarusway</h1>
      <p className="primary">Change your skillset, change your future!</p>
      <p className={props.btnClass}>{props.btnName}</p>
      <p className={props.btnClass ? "primary" : "secondary"}>
        {props.btnName}
      </p>
      {/* <p className="secondary">Way to Reinvent yourself</p> */}
    </div>
  );
}

export default StyleSheet;
