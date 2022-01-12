import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Functionalities from "./Functionalities";
import { Card, Row, Col } from "react-bootstrap";
import notDrinks from "../images/notDrinks.png";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const allDrinks = useSelector((state) => state.allDrinks);
  const filter = useSelector((state) => state.filter);
  const [values, setValues] = useState("");

  useEffect(() => {
    setDrinks(allDrinks);
  }, []);

  useEffect(() => {
    setDrinks(filter);
  }, [filter || values]);

  return (
    <div className='container'>
        <h1 style={{ textAlign: "center", margin: "auto" , color:'white'}}>Choose your Drink!</h1>
        <br />
        <br />
        <Functionalities setValues={setValues} />

        {drinks ? (
          <Row xs={2} md={4} className="g-3">
            {drinks.map((d) => {
              return (
                <Link
                  to={`/drinks/${d.idDrink}`}
                  key={`${d.idDrink}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Col>
                    <Card bg="light">
                      <Card.Img
                        variant="bottom"
                        src={d.strDrinkThumb}
                        alt={"d-" + d.strDrinkThumb}
                      />
                      <Card.Header>{d.strDrink}</Card.Header>
                    </Card>
                  </Col>
                </Link>
              );
            })}
          </Row>
        ) : (
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alingItems: "center",
              margin: "auto",
              background: "white",
            }}
          >
            <Card.Img
              src={notDrinks}
              alt="page not found"
              style={{ background: "white", width: "250px", margin: "auto" }}
            />
          </Card>
        )}        
    </div>
  );
};

export default Drinks;
