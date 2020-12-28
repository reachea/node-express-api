const express = require("express");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/products", apiRouter);
app.use(bodyParser.json());

app.listen(8080, () => {
  console.log("server is running!");
});
