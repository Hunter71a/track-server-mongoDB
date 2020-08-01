require('./models/User');
require('./models/Track');
const mongoConnectionURI = require('../config/index');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const trackRoutes = require('./routes/trackRoutes');
const authRoutes = require('./routes/authRoutes');

const requireAuth = require('./middlewares/requireAuth');


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://user_name:password@cluster0.1serr.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,    
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3030, () => {
  console.log('Listening on port 3030');
});



// EXAMPLE DRIVER CODE:
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admincolson:<password>@cluster0.1serr.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
