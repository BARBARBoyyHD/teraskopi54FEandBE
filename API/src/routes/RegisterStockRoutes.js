const express = require("express")
const Routes = express.Router()
const RegisterStockController = require("../controller/RegisterStockController")

Routes.post("/api/register/stock", RegisterStockController.register)

module.exports = Routes