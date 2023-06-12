import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => {
  const endpoint = "http://localhost:3001/countries";
  return async function (dispatch) {
    try {
      const apiData = await axios.get(endpoint);
      const countries = apiData.data;
      return dispatch({ type: GET_COUNTRIES, payload: countries });
    } catch (error) {
      console.error(error);
    }
  };
};
