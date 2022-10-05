const addressService = require("../services/address.service.js");
const clientservice = require("../services/client.service.js");
// const axios = require("axios");

// GET
const getAllAddress = async (req,res) => {
    const address = await addressService.getAllAddressService();

    if(address.length === 0){
        return res.status(400).send({message: "No address registered"})
    }

    res.send(address);
}

const getAddress = async (req,res) => {
    base_cnpj = req.params.cnpj;
    
    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client not found"})
    }

    const id = req.params.id;

    if(id === undefined) {
        const address = await addressService.getAddressService(base_cnpj);
    
        if(address === -1){
            return res.status(400).send({message: "No address found"})
        };

        res.send(address);
    }else{

        const address = await addressService.getOneAddressService(base_cnpj, id);
        
        if(address === -1){
            return res.status(400).send({message: "Address ID not found"});
        };

        res.send(address);
    }
};

// POST
const createAddress = async (req,res) => {
    const base_cnpj = req.params.cnpj;

    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client not found"})
    }

    const {
        id,
        Logradouro,
        Numero,
        Complemento,
        Bairro,
        Cidade, 
        Estado, 
        CEP,
    } = req.body;

    if (!id || !Logradouro|| !Numero || !Bairro || !Cidade || !Estado || !CEP) {
        res.status(400).send({message: "Submit all required fields"});
    }

    let check = 0;
    for(const index in client.Address){
        // console.log(client.Address);   
        if(client.Address[index].id == id){
            check = 1;
        }
    }

    if(check == 1){
        return res.status(400).send({message: "Address ID already in use for this client"})
    } 

    // Tentativa de Obter Latitude e Longitude - Falha de autenticacao.
    //await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${CEP}&key=AIzaSyAxqPImdwF8gX1Lfy3YJHou4UyLupKltxM`)
    //.then(async (res) => {
    //    const latitude = res[0].geometry.location.lat;
    //    const longitude = res[0].geometry.location.lng;

    await addressService.createAddressService(base_cnpj, req.body);
   
    return res.status(200).send({message: "Address created successfully"});    
};

// PATCH
const updateAddress = async (req,res) => {
    const base_cnpj = req.params.cnpj;
    
    const client = await clientservice.findClientByCNPJService(base_cnpj);
    
    console.log(client);

    if(!client){
        return res.status(400).send({message: "Client not found"})
    }

    const {
        Logradouro,
        Numero,
        Complemento,
        Bairro,
        Cidade, 
        Estado, 
        CEP,
    } = req.body;

    if (!Logradouro && !Complemento && !Numero && !Bairro && !Cidade && !Estado && !CEP) {
        res.status(400).send({message: "Submit at least one field"});
    }

    const id = req.params.id;

    const address_id = await addressService.getOneAddressService(base_cnpj, id);
        
        if(address_id === -1){
            return res.status(400).send({message: "Address ID not found"})
        };

    let position = 0
    for(let i = 0; i < client.Address.length; i++){
        if(client.Address[i].id == id){
            position = i
        }
    }

    await addressService.updateAddressService(
        base_cnpj,
        position,
        Logradouro,
        Numero,
        Complemento,
        Bairro,
        Cidade,
        Estado,
        CEP);

    res.status(200).send({message: "Address updated successfully"});
};

// DELETE
const deleteAddress = async (req,res) => {
    const base_cnpj = req.params.cnpj;
    
    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client not found"})
    }

    const id = req.params.id;

    const address_id = await addressService.getOneAddressService(base_cnpj, id);
        
    if(address_id == -1){
        return res.status(400).send({message: "Address ID not found"})
    }

    let position = 0
    for(let i = 0; i < client.Address.length; i++){
        if(client.Address[i].id == id){
            position = i
        }
    }

    const address_array = client.Address.filter((_Address_,index) => index!=position)

    await addressService.deleteAddressService(base_cnpj,address_array);

    res.status(200).send({message: "Address deleted"})
}

module.exports = { getAllAddress, getAddress , createAddress , updateAddress, deleteAddress}