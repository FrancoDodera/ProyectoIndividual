import { useEffect, useState } from "react";
import style from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, getActivity, postActivity } from "../../redux/action";
import { validate } from "./validation";
const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  //ESTADO DEL FORM
  const [activity, setActivity] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    seasons: "",
    country: [],
  });

  //ESTADO DE ERRORES
  const [error, setError] = useState({});
  const createActivity = () => {
    // Implementa la lógica para crear la actividad turística aquí
    dispatch(postActivity(activity));
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  const handleChange = (event) => {
    setActivity({
      ...activity,
      name: event.target.value,
    });
    setError(
      validate({ ...activity, [event.target.name]: event.target.value })
    );
  };

  const handleSelectDifficulty = (event) => {
    setActivity({
      ...activity,
      difficulty: event.target.value,
    });
    setError(
      validate({ ...activity, [event.target.difficulty]: event.target.value })
    );
  };

  const handleSelectDuration = (event) => {
    setActivity({
      ...activity,
      duration: event.target.value,
    });
    setError(
      validate({ ...activity, [event.target.duration]: event.target.value })
    );
  };
  const handleSelectSeasons = (event) => {
    setActivity({
      ...activity,
      seasons: event.target.value,
    });
    setError(
      validate({ ...activity, [event.target.seasons]: event.target.value })
    );
  };

  // const handleSelectCountries = (event) => {
  //   setActivity({
  //     ...activity,
  //     country: event.target.value,
  //   });
  // };

  const handleSelectCountries = (event) => {
    const selectedCountry = event.target.value;
    const isSelected = activity.country.includes(selectedCountry);

    if (isSelected) {
      // Si el país ya está seleccionado, eliminarlo del array
      const updatedCountries = activity.country.filter(
        (country) => country !== selectedCountry
      );
      setActivity({
        ...activity,
        country: updatedCountries,
      });
      setError(
        validate({ ...activity, [event.target.countries]: event.target.value })
      );
    } else {
      // Si el país no está seleccionado, agregarlo al array
      setActivity({
        ...activity,
        country: [...activity.country, selectedCountry],
      });
    }
  };

  return (
    <>
      <div className={style.container}>
        <form className={style.formContainer}>
          <h1 className={style.title}>CREATE YOUR ACTIVITY</h1>
          <div className={style.divContainer}>
            <label className={style.camp}>Name:</label>
            <input
              className={style.input}
              value={activity.name}
              type="text"
              name="name"
              placeholder="NAME"
              onChange={handleChange}
            />
          </div>
          <span className={style.span}> {error.name} </span>

          <div className={style.divContainer}>
            <label className={style.camp}>Difficulty:</label>
            <select
              value={activity.difficulty}
              className={style.select}
              name="difficulty"
              onChange={handleSelectDifficulty}
            >
              <option value="">Select Difficulty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <span className={style.span}>{error.difficulty}</span>

          <div className={style.divContainer}>
            <label className={style.camp}>Duration:</label>
            <select
              onChange={handleSelectDuration}
              value={activity.duration}
              className={style.select}
              name="duration"
            >
              <option>Select duration</option>
              <option value="2HS">2HS</option>
              <option value="4HS">4HS</option>
              <option value="6HS">6HS</option>
              <option value="8HS">8HS</option>
            </select>
          </div>
          <span className={style.span}>{error.duration}</span>
          <div className={style.divContainer}>
            <label className={style.camp}>Seasons:</label>
            <select
              onChange={handleSelectSeasons}
              value={activity.seasons}
              className={style.select}
              name="seasons"
            >
              <option>Select seasons</option>
              <option value="Summer">Summer</option>
              <option value="Spring">Winter</option>
              <option value="Winter">Spring</option>
              <option value="Autumn">Autumn</option>
            </select>
          </div>
          <span className={style.span}>{error.seasons}</span>
          <div className={style.divContainer}>
            <label className={style.camp}>Countries:</label>
            <select
              id="countries"
              onChange={handleSelectCountries}
              className={style.select}
              name="countries"
            >
              <option>Select Country</option>
              {countries?.map((country) => (
                <option key={country.id}>{country.name}</option>
              ))}
            </select>
          </div>
          <span className={style.span}>{error.country}</span>

          <div className={style.buttonDiv}>
            <button className={style.button} onClick={createActivity}>
              Create Activity
            </button>
          </div>
        </form>
        <div className={style.countryContainer}>
          <h3 className={style.titleSelect}>Selected Countries:</h3>
          <p className={style.selectedCountries}>
            {activity.country.length > 0 ? (
              activity.country.map((country) => (
                <span key={country} className={style.selectedCountry}>
                  {" " + country + ","}
                </span>
              ))
            ) : (
              <span className={style.noSelectedCountry}>
                There is no country assigned
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
