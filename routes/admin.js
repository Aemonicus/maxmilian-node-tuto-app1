const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require("../utils/path")

router.use((req, res, next) => {
  console.log("Inside admin middleware")
  next()
})

router.use("/admin", (req, res, next) => {
  console.log("Inside second admin middleware")
  res.send("Hellooooooooo from ADMIN.JS")
})

router.get("/add-products", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"))
})

module.exports = router