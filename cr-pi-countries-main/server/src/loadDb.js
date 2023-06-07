const axios = require("axios");
const { Country } = require("./db");

const getApiInfo = async () => {
  const apiUrl = await axios.get("http://localhost:5000/countries");
  const apiInfo = await apiUrl.data.map((country) => {
    return {
      name: country.name.common,
      cca3: country.cca3,
      id: country.cca3,
      img: country.flags.svg,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : country.name.common,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
  return apiInfo;
};

async function loadDb() {
  try {
    {
      const countries = await getApiInfo();
      await Promise.all(
        countries.map(async (country) => {
          await Country.create(country);
        })
      );
    }
    console.log("database loaded");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { loadDb };
