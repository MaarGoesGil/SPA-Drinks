const initialState = {
  allDrinks: [],
  idDrinks: [],
  filter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_DRINKS":
      return {
        ...state,
        allDrinks: action.payload,
        filter: action.payload,
      };
    case "SEARCH_NAME":
      return {
        ...state,
        filter: action.payload,
      };
    case "SEARCH_ID":
      return {
        ...state,
        idDrinks: action.payload,
      };
    case "WITHOUT_ALCOHOLE":
      return {
        ...state,
        filter: action.payload,
      };
    case "WITH_ALCOHOLE":
      return {
        ...state,
        filter: action.payload,
      };
    case "ORDINARY_DRINKS":
      return {
        ...state,
        filter: action.payload,
      };
    case "COCKTAIL":
      return {
        ...state,
        filter: action.payload,
      };
    case "COCKTAIL_GLASS":
      return {
        ...state,
        filter: action.payload,
      };
    case "CHAMPAGNE_FLUTE":
      return {
        ...state,
        filter: action.payload,
      };
    case "SORT_BY_NAME_ASC":
      function orderAsc() {
        let drinks = state.filter;
        console.log(drinks)
        return drinks.sort((a, b) => {
          if (a.strDrink.toLowerCase() < b.strDrink.toLowerCase()) {
            return -1;
          }
          if (a.strDrink.toLowerCase() > b.strDrink.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filter: orderAsc(),
      };
    case "SORT_BY_NAME_DES":
      function orderDes() {
        let drinks = state.filter;
        console.log(drinks)
        return drinks.sort((a, b) => {
          if (a.strDrink.toLowerCase() > b.strDrink.toLowerCase()) {
            return -1;
          }
          if (a.strDrink.toLowerCase() < b.strDrink.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      return {
        ...state,
        filter: orderDes(),
      };

    default:
      return state;
  }
};
export default reducer;
