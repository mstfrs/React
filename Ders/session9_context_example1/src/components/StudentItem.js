import React from "react";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentItem = ({ studentprop }) => {
  const { changeColor } = useContext(StudentContext);
  const { id, name, age, color, email } = studentprop;
  return (
    <div
      key={id}
      style={{
        backgroundColor: studentprop.color,
      }}
    >
      <h2>{name} </h2>
      <h4>{email}</h4>
      <h4>{age}</h4>
      Color:{" "}
      <input
        type="text"
        value={color}
        onChange={(e) => changeColor(e.target.value, id)}
      ></input>
    </div>
  );
};

export default StudentItem;
