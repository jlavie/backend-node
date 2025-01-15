// importation d'express
const express = require('express');

// création de l'application express
const app = express();

// exporter pour pouvoir y avoir accès, notemment le server node (server.js)
module.exports = app;