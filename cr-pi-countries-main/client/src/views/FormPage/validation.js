export const validate = (data) => {
  const regexName = /^[a-zA-Z\s]+$/;
  let error = {};

  if (!data.name) error.name = "Añade una actividad ❌";
  else if (data.name.length > 20) error.name = "El nombre es muy largo ❌";
  else if (!regexName.test(data.name))
    error.name = "Solo se permiten letras ❌";

  if (data.difficulty === 0 || data.difficulty === "")
    error.difficulty = "Elige una dificultad ❌";

  if (data.duration === "") error.duration = "Elige una duracion ❌";
  if (data.seasons === "") error.seasons = "Elige una temporada ❌";

  if (data.country.length === 0) error.country = "Debes seleccionar un país ❌";

  console.log(data.country);

  return error;
};
