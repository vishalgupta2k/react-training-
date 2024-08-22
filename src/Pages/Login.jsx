import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/cards", { state: { data: { name: "Vishal" } } });
    }, 2000);
  };

  return (
    <div>
      <div>Login</div>
      {/* <Link to="/cards"> */}
      <button onClick={handleClick}>cards</button>
      {/* </Link> */}
    </div>
  );
};

export default Login;
