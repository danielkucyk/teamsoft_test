const route = require ('express').Router();
const addresscontroller = require("../controllers/address.controllers.js")

// GET
route.get("/all", addresscontroller.getAllAddress)
route.get("/:cnpj", addresscontroller.getAddress)
route.get("/:cnpj/:id", addresscontroller.getAddress)

// POST
route.post("/:cnpj", addresscontroller.createAddress)

// PATCH
route.patch("/:cnpj/:id", addresscontroller.updateAddress)

//DELETE
route.delete("/:cnpj/:id", addresscontroller.deleteAddress)

module.exports = route;