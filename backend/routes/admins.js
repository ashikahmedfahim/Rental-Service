const express = require("express");
const router = express.Router();
const admin = require("../controllers/admins");
const catchAsync = require("../utilities/catchAsync");

router.get("/", catchAsync(admin.getAll));
router.post("/", catchAsync(admin.createOne));
router.get("/:id", catchAsync(admin.getOne));
router.patch("/:id", catchAsync(admin.updateOne));
router.delete("/:id", catchAsync(admin.deleteOne));

module.exports = router;
