const express = require("express")
const Routes = express.Router()
const RegisterCashierController = require("../controller/RegisterCashierController")

Routes.post("/api/register/cashier", RegisterCashierController.register)

module.exports = Routes