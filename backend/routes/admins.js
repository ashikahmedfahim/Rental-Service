const express = require("express");
const router = express.Router();
const admin = require("../controllers/admins");
const catchAsync = require("../utilities/catchAsync");

router.get("/", catchAsync(admin.getAll));

module.exports = router;
