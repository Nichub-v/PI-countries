const { Router } = require("express");
const loadCountries = require("../controllers/loadCountries.js")
const getCountries = require("../controllers/getCountries.js")
const postActivities = require("../controllers/postActivities.js")
const getActivities = require("../controllers/getActivities.js")
const getActivityCountries = require("../controllers/getActivityCountries.js")

const router = Router();

router.get("/activity_countries/:activity", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    getActivityCountries(req, res)
})

router.get("/", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    loadCountries(req, res)
})

router.get("/countries/", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    getCountries(req, res)
})

router.get("/countries/:id", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    getCountries(req, res)
})

router.post("/activities", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    postActivities(req, res)
})

router.get("/activities", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    getActivities(req, res)
})

module.exports = router;
