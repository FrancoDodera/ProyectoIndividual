import axios from "axios";
import {
  GET_COUNTRY,
  GET_COUNTRIES,
  GET_COUNTRIESBYNAME,
  ORDER_COUNTRIES,
  ORDER_CONTINENT,
  ORDER_POPULATION,
  GET_ACTIVITY,
  POST_ACTIVITY,
} from "./action-types";

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

export const getCountryByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`${endpoint}/countries/name?name=${name}`);
    const countryName = apiData.data;
    return dispatch({ type: GET_COUNTRIESBYNAME, payload: countryName });
  };
};

export const orderCountries = (orderType) => {
  return { type: ORDER_COUNTRIES, payload: orderType };
};

export const orderContinent = (orderType) => {
  return { type: ORDER_CONTINENT, payload: orderType };
};

export const orderByPopulation = (population) => {
  return { type: ORDER_POPULATION, payload: population };
};

export const getActivity = () => {
  return async function (dispatch) {
    const result = await axios.get(`${endpoint}/activities`);
    return dispatch({ type: GET_ACTIVITY, payload: result.data });
  };
};

export const postActivity = (activity) => {
  return async function (dispatch) {
    const result = await axios.post(`${endpoint}/activities`, activity);

    return dispatch({ type: POST_ACTIVITY, payload: result.data });
  };
};
