import React from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Bar!</h1>
      <h3>Let's enjoy of an drinks... </h3>
      <button onClick={() => navigate("/drinks")}>drinks</button>
    </div>
  );
};

export default Home;
