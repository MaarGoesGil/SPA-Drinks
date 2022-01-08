import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  noAlcoholDrinks,
  alcoholDrinks,
  OrdinaryDrinks,
  cocktail,
  cocktailGlass,
  champagneFlute,
  orderASC,
  orderDES,
} from "../redux/action";

const Functionalities = ({setValues}) => {
  const dispatch = useDispatch();

  function onFilter(e) {
    if (e.target.value === "alcoholic") {
      setValues(e.target.value);
      dispatch(alcoholDrinks());
    }
    if (e.target.value === "no-alcoholic") {
      setValues(e.target.value);
      dispatch(noAlcoholDrinks());
    }
    if (e.target.value === "ordinary") {
      setValues(e.target.value);
      dispatch(OrdinaryDrinks());
    }
    if (e.target.value === "cocktail") {
      setValues(e.target.value);
      dispatch(cocktail());
    }
    if (e.target.value === "cocktailGlass") {
      setValues(e.target.value);
      dispatch(cocktailGlass());
    }
    if (e.target.value === "champagne") {
      setValues(e.target.value);
      dispatch(champagneFlute());
    }
  }

  function orderBy(e) {
    if (e.target.value === "orderASC") {
      setValues(e.target.value);
      dispatch(orderASC());
    }
    if (e.target.value === "orderDES") {
      setValues(e.target.value);
      dispatch(orderDES());
    }
  }

  return (
    <div className="container">
      <label>
        Filter by :
        <select onChange={onFilter}>
          <option value="alcoholic">Alcoholic</option>
          <option value="no-alcoholic">No-Alcoholic</option>
          <option value="ordinary">Ordinary Drinks</option>
          <option value="cocktail">Cocktail</option>
          <option value="cocktailGlass">Cocktail Glass</option>
          <option value="champagne">Champagne Flute</option>
        </select>
      </label>
      <label>
        Order by :
        <select onChange={orderBy}>
          <option value="orderASC">A-Z</option>
          <option value="orderDES">Z-A</option>
        </select>
      </label>
    </div>
  );
};

export default Functionalities;
