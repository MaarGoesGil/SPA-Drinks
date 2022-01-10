import React from "react";

export default function FilterNav({ onFilter, orderBy }) {
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
}
