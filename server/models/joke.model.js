module.exports = (sequelize, Sequelize) => {
    const Joke = sequelize.define("joke", {
        type: {
            type: Sequelize.STRING
        },
        setup: {
            type: Sequelize.STRING
        },
        punchline: {
            type: Sequelize.BOOLEAN
        }
    }, {
        timestamps: false,
    });
    return Joke;
};