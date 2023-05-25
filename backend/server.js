const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const swaggerRoute = require('./routes/swagger')
const queriesRoute = require("./routes/query")
const dbConfig = require("./util/dbconfig");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(swaggerRoute)
app.use(queriesRoute)

dbConfig();
app.listen(3000, () => {
  console.log("sucessful");
});
