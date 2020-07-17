const express = require("express");
const router = express.Router();
const { homePage, getUser, createUser } = require("./../Controllers/user");
router.get("/",homePage);
router.get("/user",getUser);
router.post("/create",createUser);
module.exports = router