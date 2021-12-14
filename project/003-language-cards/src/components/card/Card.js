import React, { useState } from "react";
import "./Card.css";

const Card = ({ name, img, options }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div key={name} onClick={() => setHidden(!hidden)}>
        {hidden ? (
          <Frontside name={name} img={img} />
        ) : (
          <Backside options={options} />
        )}
        {/* <img
          src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
          alt=""
        />
        <h5>{name}</h5> */}
      </div>
    </>
  );
};

export default Card;

function Frontside({ img, name }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
}

function Backside({ options }) {
  return (
    <div>
      <ul className="info">
        {options.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
