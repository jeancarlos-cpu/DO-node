const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'far'
  }
});


app.get('/', function (req, res) {
  // res.send('It is working!');
  knex.select("*").from('users');
})

app.listen(80, function () {
  console.log('Magic is happening on port 80!');
})

