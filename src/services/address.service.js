const address = require("../models/address.js");
const client = require ("../models/client.js");
const { all } = require("../routes/client.routes.js");

// GET
const getAllAddressService = async () => {
    const all_address = await client.find({$exists: client.Address})

    const address = [];

    for(let i = 0; i < all_address.length; i++){
        const client_number = all_address[i];
        for(let x = 0; x < client_number.Address.length; x++){
            address.push(client_number.Address[x]);
        }
        
    }

    return address;
};

const getAddressService = async (base_cnpj) => {
    const client_id = await client.findOne({"CNPJ": base_cnpj});
    const address_id = client_id.Address;
    return address_id
}

const getOneAddressService = async (base_cnpj, id) => {
    const client_id = await client.findOne({"CNPJ": base_cnpj});

    let address_full = -1;
    for(let i=0; i < client_id.Address.length; i++){
        if(client_id.Address[i].id == id){
            address_full = client_id.Address[i]
        }
    }
    return address_full;
};

// POST
const createAddressService = (base_cnpj,body) => {client.findOneAndUpdate({"CNPJ": base_cnpj},{$push: {Address: body}}).exec()};

// PATCH
const updateAddressService = async (base_cnpj, position, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, CEP) => client.findOneAndUpdate({"CNPJ": base_cnpj},
        {$set:{
            [`Address.${position}.Logradouro`]: Logradouro,
            [`Address.${position}.Numero`]: Numero,
            [`Address.${position}.Complemento`]: Complemento,
            [`Address.${position}.Bairro`]: Bairro,
            [`Address.${position}.Cidade`]: Cidade,
            [`Address.${position}.Estado`]: Estado,
            [`Address.${position}.CEP`]: CEP
            }}
);

// DELETE
const deleteAddressService = (base_cnpj,address_array) => client.updateOne({ "CNPJ": base_cnpj },{"Address": address_array});

module.exports = {getAllAddressService , getAddressService , getOneAddressService , createAddressService , updateAddressService , deleteAddressService};