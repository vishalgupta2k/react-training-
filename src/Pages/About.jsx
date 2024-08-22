import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate("/cards");
    }, 2000);
  };

  return (
    <div>
      About PAge
      <button onClick={handleClick}>cards</button>
    </div>
  );
};

export default About;
