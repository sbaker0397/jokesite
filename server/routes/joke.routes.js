module.exports = app => {
    const jokes = require("../controllers/joke.controller");
    let router = require("express").Router();

    // Retrieve all Jokes
    router.get("/", jokes.findAll);

    app.use('/api/jokes', router);
};