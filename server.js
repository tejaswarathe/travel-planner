const express = require("express");
const app = express()

// app.use(express.urlencoded({extended: true}));
// app.use(express.json)

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
})

const locationRouter = require("./routes/locations.js")

// app.use('/location', locationRouter)

app.listen(3000)