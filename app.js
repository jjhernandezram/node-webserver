var hbs = require('hbs');
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'NodeJs',
    description: 'Webserver básico con NodeJs y Handlebars.',
  });
});

app.get('*', (req, res) => {
  res.send('404 | Pagina no encontrada');
});

app.listen(port, () => {
  console.log(`Escuchando desde http://localhost:${port}`);
});
