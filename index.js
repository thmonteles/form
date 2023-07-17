const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, response) => {
  response.sendFile(__dirname + '/template/form.html');
});
app.post('/data', (req,response) => {
    response.sendFile(__dirname + '/template/msg.html');
});

app.listen(3000, () => {
  console.log('Servidor iniciado.');
});