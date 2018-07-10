const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const config = require('../config.js');
const db = require('../db/index');
const helper = require('./helper');

const app = express();

const port = 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/charities', (req, res) => {
  helper.getCharities(req.body.query)
  .then((body) => {
    db.save(JSON.parse(body.body));
  })
  .catch((err) => {
    // console.log('your post err', err);
  });
});

app.get('/charities', (req, res) => {
  db.Charities.find()
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    // console.log('you have get err', err);
  });

});

app.get('/charities-info', (req, res) => {
  axios.get(`http://data.orghunter.com/v1/charitysearch?searchTerm=humane&user_key=${config.TOKEN}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    // console.log('this your error', err)
  });

});


app.get('/images', (req, res) => {

  axios.get(`https://api.unsplash.com/search/photos?page=1&query=communityservice&client_id=${config.UNSPLASH}`)
  .then((response) => {
    res.send(response.data.results);
  })
  .catch((err) => {
    // console.log('this your error', err)
  });

});

app.post('/registration', (req, res) => {
  db.usersSave(req.body)
});

app.get('/registration', (req, res) => {
  db.Users.find()
  .then((response) => {
    console.log(response)
    res.send(response)
  })
  .catch((err) => {
    console.log('your err', err)
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


module.exports = app;