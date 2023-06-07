const { Router } = require("express");

const {
  getCountries,
  getCountriesById,
  getCountriesByName,
} = require("../controllers/countriesController");

const countryRouter = Router();

countryRouter.get("/", getCountries);

countryRouter.get("/name", getCountriesByName);

countryRouter.get("/:idPais", getCountriesById);

module.exports = countryRouter;
