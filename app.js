// importation d'express
const express = require('express');

// création de l'application express
const app = express();

app.use((req, res, next) => {
    console.log('Requete reçue');
    next();
})

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({
        messge: 'Requête bien reçue'
    })
    next();
});

app.use((req, res) => {
  console.log('Réponse envoyée avec succès !');
});

// exporter pour pouvoir y avoir accès, notemment le server node (server.js)
module.exports = app;