// create a new router
const express = require("express");
const router = express.Router();
// class inside of models
const GiftExchange = require("../models/giftExchange");

// router.get("/", async (req, res, next) => {
//   const votes = await GiftExchange.tallyVotes();
//   res.status(200).json(votes);
// });

// router.post("/", async (req, res, next) => {
//   notPaired = req.body["names"];
//   const generatedPairs = await GiftExchange.pairs(notPaired);
//   console.log(generatedPairs);
//   res.status(200).json(generatedPairs);
// });

router.post("/", async (req, res, next) => {
  // geting the user input
  notPaired = req.body["names"];
  const test = await GiftExchange.traditional(notPaired);
  console.log(test);
  res.status(200).json(test);
});

module.exports = router;
