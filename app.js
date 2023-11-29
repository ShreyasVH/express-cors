const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowedOrigins = ['https://http-client.react.com', 'https://http-client.vue.com', 'https://http-client.angular.com', 'https://http-client.sveltekit.com', 'https://http-client.solid.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (origin && !allowedOrigins.includes(origin)) {
      callback(new Error('Not allowed by CORS'));
    } else {
      callback(null, origin);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Accept', 'Origin', 'X-Requested-With', 'Content-Type', 'Referer', 'User-Agent', 'Access-Control-Allow-Origin'],
};
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('App is working'))

app.use('/', routes)

app.listen(process.env.PORT, () => console.log('Example app listening on port ' + process.env.PORT + '!'))

module.exports = {
  app
}