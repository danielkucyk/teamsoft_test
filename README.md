# :pen: TeamSoft Test 

API built to realise the registration and maintenence of clients and their addresses.

## :book: Summary

-   [Dependencies](https://github.com/danielkucyk/teamsoft_test/README.md#gear-dependencies)
-   [Get Started](https://github.com/danielkucyk/teamsoft_test/README.md#rocket-get-started)
    -   [How to install](https://github.com/danielkucyk/teamsoft_test/README.md#how-to-install)
    -   [Running the application](https://github.com/danielkucyk/teamsoft_test/README.md#running-the-application)
-   [Considerations](https://github.com/danielkucyk/teamsoft_test/README.md#-considerations)
-   [URLs](https://github.com/danielkucyk/teamsoft_test/README.md#-urls)
    -   [Client](https://github.com/danielkucyk/teamsoft_test/README.md#client)
    -   [Address](https://github.com/danielkucyk/teamsoft_test/README.md#address)    
-   [Templates](https://github.com/danielkucyk/teamsoft_test/README.md#-templates)
    -   [Client](https://github.com/danielkucyk/teamsoft_test/README.md#client-1)
    -   [Address](https://github.com/danielkucyk/teamsoft_test/README.md#address-1) 



## :gear: Dependencies

-   [Node](https://nodejs.org/en/)
-   [MongoDB](https://mongodb.com/)

## :rocket: Get started

Assuming you have already installed the necessary dependencies.

### How to install

Clone this repository:

```
git clone https://github.com/danielkucyk/teamsoft_test.git
```

Enter the folder and install the dependencies:

```
npm install
```

### Running the application

Port is setted to "http://localhost:3000", can be adjusted in the index file. Execute via Node in the terminal: 

```
node index
```
### Making requests

Use any tool that you prefer. Here are some examples:
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [Insomnia](https://insomnia.rest/)
- [RapidAPI](https://rapidapi.com/products/api-design/)

## 💬 Considerations
- CNPJ was used as unique client ID to facilitate the project test usage. It is recommended to use Mongo's *_id* object and adjustments should be simple for that result.
- An arbitrary ID was used to identify the registered address. Optimally this number will be generated automatically and it's an upgrade opportunity.
- It was also considered to make a separate address database linked to each client id. The requests logic would be easier to execute but the visualisation would require more code to link both databases. Feedbacks on this regard are welcomed.
- There was a trial to obtain the location information based on CEP with Google [geocoding API](https://developers.google.com/maps/documentation/geocoding/overview). It encountered an authorization block which left it as another future upgrade.

## 🌐 URLs

Expected URLs for call executions and optional parameters:
> Swap *"3000"* with your designated host port.

> Swap *":CNPJ"* with your desired client CNPJ number.

> Swap *":id"* with your desired address arbitrary ID.

### *Client*

- GET: 
```
http://localhost:3000/client
```
```
http://localhost:3000/client/:CNPJ
```
- POST: 
```
http://localhost:3000/client
```
- PATCH: 
```
http://localhost:3000/client/:CNPJ
```
- DELETE: 
```
http://localhost:3000/client/:CNPJ
```
### *Address*

- GET: 
```
http://localhost:3000/client/address/all
```
```
http://localhost:3000/client/address/:CNPJ
```
```
http://localhost:3000/client/address/:CNPJ/:id
```
- POST: 
```
http://localhost:3000/client/address/:CNPJ
```
- PATCH: 
```
http://localhost:3000/client/address/:CNPJ/:id
```
- DELETE: 
```
http://localhost:3000/client/address/:CNPJ/:id
```

## 🧩 Templates
*.json* templates expected to be registered. Can be found in the templates folder:

### Client
```
{
    "CNPJ": 123456789,
    "Razao_Social": "Solteiro",
    "Nome_do_Contato": "Fulano da Silva",
    "Telefone": 998765432
}
```
> All fields are required.

### Address
```
{
   "id": 1,
   "Logradouro": "Minha Rua",
   "Numero": 1000,
   "Complemento": "Apartamento",
   "Bairro": "Meu Bairro",
   "Cidade": "Minha Cidade",
   "Estado": "Meu Estado",
   "CEP": 98765432
}
```
> *"Complemento"* is the only optional field.
