import { GET_COUNTRIES, GET_COUNTRY } from "./action-types";

const initialState = {
  countries: [],
  countryDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };

    case GET_COUNTRY:
      return { ...state, countryDetail: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
