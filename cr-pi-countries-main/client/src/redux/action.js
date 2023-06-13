import axios from "axios";
import { GET_COUNTRY, GET_COUNTRIES } from "./action-types";

const endpoint = "http://localhost:3001";

export const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get(endpoint + "/countries");
    const countries = apiData.data;
    return dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

export const getCountry = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(endpoint + `/countries/${id}`);
    const country = apiData.data;
    return dispatch({ type: GET_COUNTRY, payload: country });
  };
};
