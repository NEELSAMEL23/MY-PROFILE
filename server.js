const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", require("./routes/contactRoutes"));
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"./client/build/index.html"));
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
