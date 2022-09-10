const express = require("express"),
  router = express.Router(),
  mainPage = require("./mainPage.routes");

// routes
router.use("/", mainPage);

// error handlers
// 404 error handler
router.use((req, res, next) => {
  let err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});
// development error handler
if (router.get("env") === "development") {
  router.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(`Произошла ошибка: ${err.message};  ${err}; `);
  });
}

// production error handler
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(`Произошла ошибка: ${err.message}`);
});
module.exports = router;
