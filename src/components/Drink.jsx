import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { idDrinks } from "../redux/action";
import DrinkDetails from "./DrinkDetails";

const Drink = () => {
  const navigate = useNavigate();
  const drinks = useSelector((state) => state.idDrinks);
  const d = drinks ? drinks[0] : undefined;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(idDrinks(id));
  }, []);

  function onClose() {
    navigate("/drinks");
  }

  return (
    <div>
      {!d ? (
        <div>
          <button onClick={onClose}>X</button>
          <h1>No hay Drinks con ese id</h1>
        </div>
      ) : (
        <DrinkDetails onClose={onClose} d={d} />
      )}
    </div>
  );
};

export default Drink;
