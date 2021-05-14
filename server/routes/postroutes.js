const express = require("express");

const router = express.Router();
const posts = require("../controllers/postcontroller.js");

router.get("/", posts.getPosts);
router.post("/", posts.createPost);
// router.get("/", posts.getPosts);
// router.get("/", posts.getPosts);
// router.get("/", posts.getPosts);

module.exports = router;
