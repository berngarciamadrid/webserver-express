'use strict'
//Constantes
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

// app.get('/', function(req, res) {
//     // res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Bernabé',
//         edad: 33,
//         url: req.url
//     }
//     res.send(salida);
//     res.end();
// });

// app.get('/data', function(req, res) {
//     res.send('Hola Data')
//     res.end();
// })


//Middleware para rutas
app.use(express.static(__dirname + '/public'));

//Express HBS engine Plantillas handlebarsjs html para Express
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    // res.send('Hola Mundo')
    res.render('home', {
        nombre: 'Bernabé'
    });
});

app.get('/about', function(req, res) {
    // res.send('Hola Mundo')
    res.render('about');
});

//Handlebars registers
hbs.registerPartials(__dirname + '/views/parciales');



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})