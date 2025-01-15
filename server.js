const http = require('http');
//install nodemon and run command to automatically run server
// npm install -g nodemon 
// nodemon server

const app = require('./app');

app.set('port', process.env.PORT || 3000);

// a chaque requete sur le serveur, la fonction suivante sera appelée
// const server = http.createServer((req, res) => {
//     res.end('Voici la réponse du serveur')
// })
const server = http.createServer(app);

// ecoute sur le port déclaré dans l'app ou par défaut le 3000
server.listen(process.env.PORT || 3000)