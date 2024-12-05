const express =  require("express")
const Routes = express.Router()
const loginCashierController = require("../controller/loginCashierController")

Routes.post("/api/login/cashier",loginCashierController.login)

module.exports = Routes