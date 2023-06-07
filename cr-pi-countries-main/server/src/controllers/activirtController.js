const postActivity = (req, res) => {
  res.send("aca posteo las actividades");
};

const getActivity = (req, res) => {
  res.send("aca tengo las actividaes");
};

module.exports = { getActivity, postActivity };
