const express = require("express"),
    router = express.Router();

router
    .route("/")
    .get((req, res) => res.send(
        'Здесь должна быть фраза "Hello World", но работу выполнили студенты группы 020303-АИСа-о19: <b>Зуев, Павленко, Венцов, Католенец, Скребнев</b>, поэтому надпись изменилась',
    ));

module.exports = router;