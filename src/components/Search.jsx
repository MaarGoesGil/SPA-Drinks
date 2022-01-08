import React, { useState } from "react";
import { searchDrinks } from "../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  function handleChange(e) {
    setValue(e.target.value);
    navigate("/drinks");
    e.target.value === ""
      ? dispatch(searchDrinks(""))
      : dispatch(searchDrinks(e.target.value));
  }

  // -----------  Seteo de valor en el input  --------------

  document.addEventListener("click", function (e) {
    if (e.target.id !== "search") {
      setValue("");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      setValue("");
    }
  });

  // ----------------------------------------------------------

  return (
    <div className="navbar">
      <input
        value={value}
        type="text"
        placeholder="Search your drink... "
        onChange={handleChange}
      />
      <button>Search</button>
    </div>
  );
};

export default Search;
