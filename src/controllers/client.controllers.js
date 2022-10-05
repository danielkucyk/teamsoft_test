const clientservice = require("../services/client.service.js");

// GET
const findClients = async (req,res) => {
    const clients = await clientservice.findClientsService();

    if(clients.length === 0){
        return res.status(400).send({message: "No registered clients"})
    }

    res.send(clients);
};

const findClientByCNPJ = async (req,res) =>{
    const base_cnpj = req.params.cnpj;
    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client not found"})
    }

    res.send(client)
};

// POST
const createClient = async (req,res) => {
    const {
        CNPJ,
        Razao_Social,
        Nome_do_Contato,
        Telefone,
        Address
    } = req.body;

    if (!CNPJ || !Razao_Social || !Nome_do_Contato || !Telefone) {
        res.status(400).send({message: "Submit all required fields"});
    }

    const client = await clientservice.createService(req.body);

    if(!client) {
        res.status(400).send({message: "Error creating client"});
    }

    res.status(201).send({
        message: "Client created successfully",
        client: {
            id: client._id,
            CNPJ,
            Razao_Social,
            Nome_do_Contato,
            Telefone,
            Address
        }
    });
};

// PATCH
const updateClient = async (req,res) => {
    const {
        CNPJ,
        Razao_Social,
        Nome_do_Contato,
        Telefone,
    } = req.body;

    if (!CNPJ && !Razao_Social && !Nome_do_Contato && !Telefone) {
        res.status(400).send({message: "Submit at least one field"});
    }

    const base_cnpj = req.params.cnpj;

    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client was not found"})
    }

    await clientservice.updateClientService(
        base_cnpj,
        CNPJ,
        Razao_Social,
        Nome_do_Contato,
        Telefone
    );

    res.status(200).send({message: "Client info updated"});

}

// DELETE
const deleteClient = async (req,res) => {
    const base_cnpj = req.params.cnpj;

    const client = await clientservice.findClientByCNPJService(base_cnpj);

    if(!client){
        return res.status(400).send({message: "Client was not found"})
    }

    await clientservice.deleteClientService(base_cnpj);

    res.status(200).send({message:"Client was deleted"})
}

module.exports = { createClient , findClients , findClientByCNPJ , updateClient , deleteClient};