// importation d'express
const express = require('express');
const mongoose = require('mongoose');

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
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé'
    })
});

// exporter pour pouvoir y avoir accès, notemment le server node (server.js)
module.exports = app;