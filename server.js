// Barebones server template
const express = require("express");
const morgan = require("morgan");
const giftExchangeRouter = require("./routes/giftExchange");

const app = express();

app.use(morgan("tiny"));
app.use("/giftExchange", giftExchangeRouter);
app.get("/", async (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port);
});
