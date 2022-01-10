import React from "react";

export default function DrinkDetails ({ d, onClose }){
  return (
    <div>
      <button onClick={onClose}>X</button>
      <img
        src={`${d.strDrinkThumb}`}
        alt={"d-" + d.strDrinkThumb}
        width={"350"}
      ></img>
      <div>{d.strDrink}</div>
      <div>
        <div>{d.strCategory}</div>
        <div>{d.strIBA}</div>
        <div>{d.strAlcoholic}</div>
        <div>{d.strGlass}</div>
      </div>
      <div>{d.strInstructions}</div>
      <div>
        <h3>Ingredient</h3>
        <table>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {d.strIngredient1 ? (
              <tr>
                <td>{d.strIngredient1}</td>
                <td>{d.strMeasure1}</td>
              </tr>
            ) : null}
            {d.strIngredient2 ? (
              <tr>
                <td>{d.strIngredient2}</td>
                <td>{d.strMeasure2}</td>
              </tr>
            ) : null}
            {d.strIngredient3 ? (
              <tr>
                <td>{d.strIngredient3}</td>
                <td>{d.strMeasure3}</td>
              </tr>
            ) : null}
            {d.strIngredient4 ? (
              <tr>
                <td>{d.strIngredient4}</td>
                <td>{d.strMeasure4}</td>
              </tr>
            ) : null}
            {d.strIngredient5 ? (
              <tr>
                <td>{d.strIngredient5}</td>
                <td>{d.strMeasure5}</td>
              </tr>
            ) : null}
            {d.strIngredient6 ? (
              <tr>
                <td>{d.strIngredient6}</td>
                <td>{d.strMeasure6}</td>
              </tr>
            ) : null}
            {d.strIngredient7 ? (
              <tr>
                <td>{d.strIngredient7}</td>
                <td>{d.strMeasure7}</td>
              </tr>
            ) : null}
            {d.strIngredient8 ? (
              <tr>
                <td>{d.strIngredient8}</td>
                <td>{d.strMeasure8}</td>
              </tr>
            ) : null}
            {d.strIngredient9 ? (
              <tr>
                <td>{d.strIngredient9}</td>
                <td>{d.strMeasure9}</td>
              </tr>
            ) : null}
            {d.strIngredient10 ? (
              <tr>
                <td>{d.strIngredient10}</td>
                <td>{d.strMeasure10}</td>
              </tr>
            ) : null}
            {d.strIngredient11 ? (
              <tr>
                <td>{d.strIngredient11}</td>
                <td>{d.strMeasure11}</td>
              </tr>
            ) : null}
            {d.strIngredient12 ? (
              <tr>
                <td>{d.strIngredient12}</td>
                <td>{d.strMeasure12}</td>
              </tr>
            ) : null}
            {d.strIngredient13 ? (
              <tr>
                <td>{d.strIngredient13}</td>
                <td>{d.strMeasure13}</td>
              </tr>
            ) : null}
            {d.strIngredient14 ? (
              <tr>
                <td>{d.strIngredient14}</td>
                <td>{d.strMeasure14}</td>
              </tr>
            ) : null}
            {d.strIngredient15 ? (
              <tr>
                <td>{d.strIngredient15}</td>
                <td>{d.strMeasure15}</td>
              </tr>
            ) : null}
            {d.strIngredient16 ? (
              <tr>
                <td>{d.strIngredient16}</td>
                <td>{d.strMeasure16}</td>
              </tr>
            ) : null}
            {d.strIngredient17 ? (
              <tr>
                <td>{d.strIngredient17}</td>
                <td>{d.strMeasure17}</td>
              </tr>
            ) : null}
            {d.strIngredient18 ? (
              <tr>
                <td>{d.strIngredient18}</td>
                <td>{d.strMeasure18}</td>
              </tr>
            ) : null}
            {d.strIngredient19 ? (
              <tr>
                <td>{d.strIngredient19}</td>
                <td>{d.strMeasure19}</td>
              </tr>
            ) : null}
            {d.strIngredient20 ? (
              <tr>
                <td>{d.strIngredient20}</td>
                <td>{d.strMeasure20}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};
