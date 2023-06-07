const { Router } = require("express");
const activityRouter = Router();
const {
  postActivity,
  getActivity,
} = require("../controllers/activirtController");

activityRouter.post("/", postActivity);
activityRouter.get("/", getActivity);

module.exports = activityRouter;
