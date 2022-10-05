const client = require("../models/client");

// GET
const findClientsService = () => client.find();
const findClientByCNPJService = (CNPJ) => client.findOne({"CNPJ":CNPJ})

// PUT
const createService = (body) => client.create(body);

// PATCH
const updateClientService = (base_cnpj, CNPJ, Razao_Social, Nome_do_Contato, Telefone) => client.findOneAndUpdate(
    {"CNPJ": base_cnpj},
    {CNPJ, Razao_Social, Nome_do_Contato, Telefone});

// DELETE
const deleteClientService = (base_cnpj) => client.findOneAndDelete({"CNPJ": base_cnpj});

module.exports = {createService , findClientsService , findClientByCNPJService, updateClientService, deleteClientService}