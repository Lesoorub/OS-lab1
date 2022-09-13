"use strict";

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const routes = require("./routes/index");
// константы
const port = 8080;
const host = "0.0.0.0";

// приложение
const app = express();
app.use(favicon(__dirname + "/public/assets/img/favicon.ico"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, host, () => {
  console.log(
    `running on http://${host}:${port} or here http://localhost:${port}`
  );
});
