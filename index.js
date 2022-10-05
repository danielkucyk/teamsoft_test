const express = require("express");
const app = express();
const connectDB = require("./src/database/database.js");
const clientRoute = require("./src/routes/client.routes.js");
const addressRoute = require("./src/routes/address.routes.js");


// Conexoes
app.use(express.json());
connectDB();

// Selecionar porta de preferencia
const port = 3000
app.listen(port, () => console.log (`Servidor rodando na porta ${port}`));

// Rotas
app.use("/client", clientRoute);
app.use("/client/address", addressRoute);
