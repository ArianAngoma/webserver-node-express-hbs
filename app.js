require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Arian Angoma',
        title: 'Node - hbs'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Arian Angoma',
        title: 'Node - hbs - generic'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Arian Angoma',
        title: 'Node - hbs - elements'
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})