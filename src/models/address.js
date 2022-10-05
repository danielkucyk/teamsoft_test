const mongoose = require ("mongoose");

const addressSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },

    Logradouro: {
        type: String,
        required: true
    },

    Numero: {
        type: Number,
        required: true
    },

    Complemento: {
        type: String,
    },

    Bairro:{
        type: String,
        required: true
    }, 

    Cidade: {
        type: String,
        required: true
    },

    Estado: {
        type: String,
        required: true
    },

    CEP: {
        type: Number,
        required: true
    }

    //Latitude: {
    //    type: Number
    //},

    //Longitude: {
    //    type: Number
    //}
})

const address = mongoose.model("address", addressSchema);

module.exports = address;