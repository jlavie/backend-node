// importation d'express
const express = require('express');

// création de l'application express
const app = express();

app.use((req, res) => {
    res.json({
        messge: 'Requête bien reçue'
    })
})

// exporter pour pouvoir y avoir accès, notemment le server node (server.js)
module.exports = app;