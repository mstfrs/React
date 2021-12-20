import React from "react";
import Welcome from "../components/Welcome";
import aboutImg from "../assets/about.jpg";
import Button from "../components/Button";

const About = () => {
  const handleClick = () => {
    alert("About Sayfasına Yönlendirliyorsunuz");
  };
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Button name="About" onClickProps={handleClick} />
    </div>
  );
};

export default About;
