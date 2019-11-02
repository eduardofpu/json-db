require("dotenv").config();

const express = require("express");
const morgan = require("db.json");
const path = require("path");
const cors = require("cors");

const app = express();

/**
 * Database setup
 */
mongoose.connect(
  process.env.REACT_APP_API_DB_JSON_URL,
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/users");

app.listen(process.env.PORT || 3001);