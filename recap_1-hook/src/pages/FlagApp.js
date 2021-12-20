import React, { useEffect, useState } from "react";
import "./FlagApp.css";

const FlagApp = () => {
  const [ulkeler, setUlkeler] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="gridcontainer">
      {/* <h1>ÜLKELER</h1> */}
      {ulkeler.map((ulke) => {
        const { name, capital, flags } = ulke;
        return (
          <div key={name.common}>
            <h2>{name.common}</h2>
            <h4>Capital:{capital}</h4>
            <img src={flags[0]} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default FlagApp;
