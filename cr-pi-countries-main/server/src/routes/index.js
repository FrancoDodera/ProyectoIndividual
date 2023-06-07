const { Router } = require("express");
const countryRouter = require("./countryRouter");
const activityRouter = require("./activityRouter");

const mainRouter = Router();

mainRouter.use("/countries", countryRouter);
mainRouter.use("/activities", activityRouter);

module.exports = mainRouter;
