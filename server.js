const db = require('./config/connection');
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

db.set("debug", true);

db.once("open",()=>{
app.listen(PORT, () =>
  console.log(`Now listening on http://localhost:${PORT}`)
);
})