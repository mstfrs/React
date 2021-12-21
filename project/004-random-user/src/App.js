import axios from "axios";
import React, { useState, useEffect } from "react";
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";

const App = () => {
  const [users, setUsers] = useState([]);
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
      {users.results.map((user) => (
        <div className="container">
          <div className="grid-container">
            <div className="grid-item">
              <img src={user.picture.medium} alt="" id="userimg" />
            </div>

            <div className="grid-item">name:</div>

            <div className="grid-item">
              <img src={email} alt="" />
            </div>
            <div className="grid-item">{user.email} </div>

            <div className="grid-item">
              <img src={phone} alt="" />
            </div>
            <div className="grid-item">{user.phone}</div>

            <div className="grid-item">
              <img src={location} alt="" />
            </div>
            <div className="grid-item">{user.location.city} </div>

            <div className="grid-item">Age: {user.dob.age} </div>
          </div>

          <button className="btn-primary"></button>
        </div>
      ))}
    </div>
  );
};

export default App;
