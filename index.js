const express = require("express");
require('dotenv').config();
const app = express();
const PORT = 3000;
const api_key = process.env.API_KEY;

app.use(express.static("public"));

app.listen(PORT, () =>
    console.log(`Servidor rodando em http://localhost:${PORT}`)
);
