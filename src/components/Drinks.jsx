import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Functionalities from "./Functionalities";

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
    <div>
      <div className="container">
        <h1>DRINKS</h1>
        <br />
        <br />
        <Functionalities setValues={setValues}/>
        <div className="table-container">
          tabla
          {drinks?.map((d) => {
            return (
              <Link
                to={`/drinks/${d.idDrink}`}
                key={`${d.idDrink}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div>
                  <img
                    src={d.strDrinkThumb}
                    alt={"d-" + d.strDrinkThumb}
                    width={"350"}
                  />
                  <h3>{d.strDrink}</h3>
                  <br />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drinks;
