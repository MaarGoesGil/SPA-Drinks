import React from "react";
import { Form } from "react-bootstrap";

export default function FilterNav({ onFilter, orderBy }) {
  const style = {
    background: "white",
    color: "black",
    padding: "10px",
    hover: false,
  };

  return (
    <div className="container">
      <Form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "left",
          margin: "auto",
          textAlign: "left",
        }}
      >
        <Form.Group style={{ marginLeft: "10px" }}>
          <Form.Label style={{  color:'white' , fontSize:'20px'}}>Filter by :</Form.Label>
          <Form.Select style={style} onChange={onFilter}>
            <option value="alcoholic">Alcoholic</option>
            <option value="no-alcoholic">No-Alcoholic</option>
            <option value="ordinary">Ordinary Drinks</option>
            <option value="cocktail">Cocktail</option>
            <option value="cocktailGlass">Cocktail Glass</option>
            <option value="champagne">Champagne Flute</option>
          </Form.Select>
        </Form.Group>
        <Form.Group style={{ marginLeft: "10px" }}>
          <Form.Label style={{  color:'white', fontSize:'20px'}}>Order by :</Form.Label>
          <Form.Select style={style} onChange={orderBy}>
            <option value="orderASC">A-Z</option>
            <option value="orderDES">Z-A</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <br />
    </div>
  );
}
