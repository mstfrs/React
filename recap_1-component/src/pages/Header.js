import React from "react";
import Welcome from "../components/Welcome";
import headerImg from "../assets/header.jpg";
import Button from "../components/Button";

const Header = () => {
  const handleClick = () => {
    alert("Header Sayfasına Yönlendirliyorsunuz");
  };
  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={headerImg} />
      <Button name="Header" onClickProps={handleClick} />
    </div>
  );
};

export default Header;
