const express = require("express");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('json spaces', 2);

app.use('/static', express.static('../client'))

const db = require("./models");

db.sequelize.sync();

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Jokes application." });
});

require("./routes/joke.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});