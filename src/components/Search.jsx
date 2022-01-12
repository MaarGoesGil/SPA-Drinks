import React, { useState } from "react";
import { searchDrinks } from "../redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Form, FormControl, Button} from 'react-bootstrap';

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
  <Form className="d-flex">
  <FormControl
        value={value}
        type="text"
        placeholder="Search your drink... "
        onChange={handleChange}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default Search;
