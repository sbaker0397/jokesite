const db = require("../models");
const Joke = db.joke;
const Op = db.Sequelize.Op;

// Retrieve all Jokes from the database.
exports.findAll = (req, res) => {
    Joke.findAll({ })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving jokes"
            });
        });
};
