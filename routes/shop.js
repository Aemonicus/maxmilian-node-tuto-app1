const express = require('express');
const path = require('path');

const router = express.Router()
const rootDir = require("../utils/path")

router.use((req, res, next) => {
  console.log("Inside shop middleware")
  next()
})

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"))
})



module.exports = router