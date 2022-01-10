import React from "react";
import {useNavigate} from "react-router-dom";
import home from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className={home.container}>
      <h1>Welcome to Bar!</h1>
      <h3>Let's enjoy of an drinks... </h3>
      <button onClick={() => navigate("/drinks")}>drinks</button>
    </div>
  );
};

export default Home;