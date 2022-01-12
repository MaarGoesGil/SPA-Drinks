import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams,useNavigate } from "react-router-dom";
import { idDrinks } from "../redux/action";
import DrinkDetails from "./DrinkDetails";
import {Button, Card} from 'react-bootstrap';

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
    <div style={{width: '100vw', height: '100vh'}}>
      {!d ? (
        <Card>
          <Card.Title>No hay Drinks con ese id</Card.Title>
          <Button onClick={onClose} >Volver</Button>
        </Card>
      ) : (
        <DrinkDetails onClose={onClose} d={d} />
      )}
    </div>
  );
};

export default Drink;
