import {
  GET_COUNTRIES,
  GET_COUNTRIESBYNAME,
  GET_COUNTRY,
  ORDER_COUNTRIES,
  ORDER_CONTINENT,
  ORDER_POPULATION,
  GET_ACTIVITY,
  POST_ACTIVITY,
  FILTER_BYACTIVITY,
} from "./action-types";

const initialState = {
  countries: [],
  countryDetail: [],
  countriesByName: [],
  activity: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRY:
      return { ...state, countryDetail: action.payload };
    case GET_COUNTRIESBYNAME:
      return { ...state, countriesByName: action.payload };
    case ORDER_COUNTRIES: {
      const sortedCountries = [...state.countriesByName];
      if (action.payload === "A") {
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "D") {
        sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, countriesByName: sortedCountries };
    }
    case ORDER_CONTINENT: {
      if (action.payload === "All") {
        return { ...state, countriesByName: [...state.countries] };
      }
      let filter = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return { ...state, countriesByName: filter };
    }
    case ORDER_POPULATION: {
      const sortedCountries = [...state.countriesByName];
      if (action.payload === "Lower") {
        sortedCountries.sort((a, b) => a.population - b.population);
      } else if (action.payload === "More") {
        sortedCountries.sort((a, b) => b.population - a.population);
      }
      return { ...state, countriesByName: sortedCountries };
    }
    case GET_ACTIVITY: {
      return { ...state, activity: action.payload };
    }
    case POST_ACTIVITY: {
      return { ...state, activity: action.payload };
    }

    case FILTER_BYACTIVITY: {
      if (action.payload === "All") {
        return { ...state, countriesByName: [...state.countries] };
      }
      let filteredCountries = state.countries.filter((country) => {
        return country.Activities.some(
          (activity) => activity.name === action.payload
        );
      });
      return { ...state, countriesByName: filteredCountries };
    }

    default:
      return { ...state };
  }
};

export default reducer;
