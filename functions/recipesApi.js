const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const FirebaseConfig = require('./FirebaseConfig');
const Utilities = require('./utilities.js');

const auth = FirebaseConfig.auth;
const firestore = FirebaseConfig.firestore;

const app = express();

app.use(
  cors({
    origin: true,
  }),
);

app.use(bodyParser.json());

// ~~ RESTFUL CRUD WEB API ENDPOINTS ~~

app.get('/', (req, res) => {
  res.send('Hello from firebase function express API');
});

if (process.env.NODE_ENV !== 'production') {
  // Local dev
  app.listen(3005, () => {
    console.log('api started');
  });
}

module.exports = app;
