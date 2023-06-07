const { Activity } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, seasons } = req.body;
  console.log("Add activity", req.body);
  const validateActivity = await Activity.findOne({
    where: {
      name: name,
    },
  });
  if (!name || !difficulty || !duration || !seasons) {
    res.status(404).json("Please Complete ALL");
  }
  if (validateActivity) {
    res.status(404).json("This activity has already been added");
  } else {
    const { id } = req.body;
    const newActivity = await Activity.create({
      id,
      name,
      difficulty,
      duration,
      seasons,
    });
    res.status(200).json(newActivity);
  }
};

const getActivity = async (req, res) => {
  const activity = await Activity.findAll();
  res.status(200).send(activity);
};

module.exports = { getActivity, postActivity };
