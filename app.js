// importation d'express
const express = require('express');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

// création de l'application express
const app = express();
// mongoose.connect('mongodb://localhost:27017/dbconnect')
mongoose.connect('mongodb://127.0.0.1:27017/dbconnect')
.then(() => console.log('Connection à MongoDB réussie'))
.catch(() => console.log('Connection à MongoDB échouée'))

// mongoose.connection
// .once('open', () => console.log('Connection à MongoDB réussie'))
// .on('error', error => console.log('Connection à MongoDB échouée', error))

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/stuff', (req, res, next) => {
  Thing.find()
  .then(things => res.status(200).json(things))
  .catch(error => res.status(400).json(error))
});

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  })
  thing.save()
  .then(() =>  res.status(201).json({message: 'Objet enregistré'}))
  .catch(error => res.status(400).json({error}));   
});

// exporter pour pouvoir y avoir accès, notemment le server node (server.js)
module.exports = app;