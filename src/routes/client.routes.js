const route = require ('express').Router();
const clientcontroller = require("../controllers/client.controllers.js")

// GET
route.get("/", clientcontroller.findClients)
route.get("/:cnpj", clientcontroller.findClientByCNPJ)

// POST
route.post("/", clientcontroller.createClient)

// PATCH
route.patch("/:cnpj", clientcontroller.updateClient)

// DELETE
route.delete("/:cnpj", clientcontroller.deleteClient)

module.exports = route;