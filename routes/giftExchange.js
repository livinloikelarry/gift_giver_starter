// create a new router
const express = require("express");
const router = express.Router();

const voting = {
  pepperoni: 0,
  cheese: 0,
  ham: 0,
};

router.get("/", async (req, res, next) => {
  res.status(200).json(voting);
});

router.post("/:pizzaName", async (req, res, next) => {
  console.log(req.params);
  res.status(200).json(req.params);
});

module.exports = router;
