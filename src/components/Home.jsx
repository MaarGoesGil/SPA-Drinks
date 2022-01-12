import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Header } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const styleH1 = {
    margin: "auto",
    width: "100%",
    textAlign: "center",
    color: "white",
    borderRadius: "10px",
    fontSize: "5em",
    marginTop: "10%",
  };
  const styleH2 = {
    margin: "auto",
    width: "100%",
    textAlign: "center",
    color: "white",
    borderRadius: "10px",
    fontSize: "3em",
    marginTop: "2%",
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
      }}
    >
      <h1 style={styleH1}>Welcome to Bar!</h1>
      <h3 style={styleH2}>Let's enjoy of an drinks... </h3>
      <Button style={{
    marginTop: "2%"}} variant="light" onClick={() => navigate("/drinks")}>
        drinks
      </Button>
    </div>
  );
};

export default Home;
