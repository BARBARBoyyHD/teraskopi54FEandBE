const express = require("express")
const Routes = express.Router()
const loginStockController = require("../controller/loginStockController")

Routes.post("/api/login/stock",loginStockController.login)

module.exports = Routes