const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    console.log(locations)
    res.send("Locations basic List: " + locations[0].name )

})

router.post("/", (req, res) => {
    const isValid = true;
    if(isValid) {
        locations.push({name: req.body.Name })
    }
    console.log(locations)

    // console.log(req.body)
    res.status(201).send("new location created: ")
})

router
.route("/:locationId")
.get((req, res) => {
    res.send("Location Detail Fetched for Id: " + req.params.locationId)
})
.put((req, res) => {
    res.send("Location Detail Updated for Id: " + req.params.locationId)
})
.delete((req, res) => {
    res.send("Location Detail Deleted for Id: " + req.params.locationId)
})

let locations = [];
module.exports = router
