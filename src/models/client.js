const mongoose = require ("mongoose");
const address = require ("./address.js");

const clientSchema = new mongoose.Schema({
    CNPJ: {
        type: String,
        required: true,
        unique: true
    },

    Razao_Social: {
        type: String,
        required: true
    },
    
    Nome_do_Contato: {
        type: String,
        required: true
    },

    Telefone: {
        type: Number,
        required: true
    },

    Address: {type: [address.Schema]}
})

const client = mongoose.model("client", clientSchema);

module.exports = client;