const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(80, function () {
  console.log('Magic is happening on port 80!');
})

const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'secret',
    database : 'far'
  }
});

app.get('/', function (req, res) {
  // res.send('It is working!');
 db.select("*").from('users').then(data =>
res.json(data[0]));
});


app.post('/signin', (req, res) => {
  knex.select('email', 'hash')
      .from('users')
      .where('email', '=', req.body.email)
      .then(data => {
          const isValid = req.body.password === data[0].hash;
          if (isValid) {
              return res.status(200).json({status: "true"});
          } else {
              res.status(400).json('wrong credentials');
          }
      })
      .catch(err => res.status(400).json('unable to signin'));
})



