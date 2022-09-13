const express = require("express"),
  router = express.Router(),
  mainPage = require("./main-page");

// routes
router.use("/", mainPage);

// error handlers
// 404 error handler
router.use((req, res, next) => {
  let err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(`Произошла ошибка!`);//res.send(`Произошла ошибка: ${err.message};  ${err}; `);
  if (router.get("env") === "development") {
    // development error handler
    //mySUPERlogger3000.write(`nice try hacker, but WE catch u! Error=${err}`)
  }
});
module.exports = router;
