import axios from "axios";
import {
  ALL_DRINKS,
  SEARCH_NAME,
  SEARCH_ID,
  WITHOUT_ALCOHOLE,
  WITH_ALCOHOLE,
  ORDINARY_DRINKS,
  COCKTAIL,
  COCKTAIL_GLASS,
  CHAMPAGNE_FLUTE,
  SORT_BY_NAME_ASC,
  SORT_BY_NAME_DES,
} from "./actionType.jsx";

// CALL API
async function callAPI(dispatch, string, type) {
  const res = await axios(string);
  return dispatch({
    type: type,
    payload: res.data.drinks,
  });
}

// ------------  ALL DRINKS  ------------

export const getAllDrinks = () => {
  return async function (dispatch) {
    callAPI(dispatch, "filter.php?a=Alcoholic", ALL_DRINKS);
  };
};

//---------------------------------------

// ------------   SEARCH    -------------

export const searchDrinks = (name) => {
  if (name === "") {
    return async function (dispatch) {
      callAPI(dispatch, `filter.php?a=Alcoholic`, SEARCH_NAME);
    };
  } else {
    return async function (dispatch) {
      callAPI(dispatch, `search.php?s=${name}`, SEARCH_NAME);
    };
  }
};

export const idDrinks = (id) => {
  return async function (dispatch) {
    callAPI(dispatch, `lookup.php?i=${id}`, SEARCH_ID);
  };
};

//----------------------------------------

// ------------  FILTERS  ----------------

export const noAlcoholDrinks = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?a=Non_Alcoholic`, WITHOUT_ALCOHOLE);
  };
};

export const alcoholDrinks = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?a=Alcoholic`, WITH_ALCOHOLE);
  };
};

export const OrdinaryDrinks = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?c=Ordinary_Drink`, ORDINARY_DRINKS);
  };
};

export const cocktail = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?c=Cocktail`, COCKTAIL);
  };
};

export const cocktailGlass = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?g=Cocktail_glass`, COCKTAIL_GLASS);
  };
};

export const champagneFlute = () => {
  return async function (dispatch) {
    callAPI(dispatch, `filter.php?g=Champagne_flute`, CHAMPAGNE_FLUTE);
  };
};

//------------------------------------

//------------- SORT -----------------

export const orderASC = (drinks) => {
  return {
    type: SORT_BY_NAME_ASC,
    payload: drinks,
  };
};

export const orderDES = (drinks) => {
  return {
    type: SORT_BY_NAME_DES,
    payload: drinks,
  };
};

//------------------------------------*/
