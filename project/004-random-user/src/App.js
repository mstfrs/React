import axios from "axios";
import React, { useState, useEffect } from "react";
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState("");
  const getUser = () => {
    axios.get(`https://randomuser.me/api/`).then((response) => {
      console.log(response);

      setUsers(response.data);
      console.log(users);
    });
  };

  useEffect(() => getUser(), []);
  return (
    <div>
      {users ? (
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <img src={users.results[0].picture.medium} alt="" id="userimg" />
            </div>

            <div className="grid-item">
              <h3>
                {users.results[0].name.title} {users.results[0].name.first}
                {users.results[0].name.last}
              </h3>
            </div>

            <div className="grid-item">
              <img src={email} alt="" />
            </div>
            <div className="grid-item">{users.results[0].email} </div>

            <div className="grid-item">
              <img src={phone} alt="" />
            </div>
            <div className="grid-item">{users.results[0].phone}</div>

            <div className="grid-item">
              <img src={location} alt="" />
            </div>
            <div className="grid-item">{users.results[0].location.city} </div>
          </div>
          <div className="grid-item">Age: {users.results[0].dob.age} </div>
          <div className="grid-item">
            Register Date: {users.results[0].registered.date}
          </div>

          <button className="btn-primary" onClick={getUser}>
            Random
          </button>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      ;
    </div>
  );
};

export default App;
