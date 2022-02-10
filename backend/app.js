const express = require('express');
const mongoose = require('mongoose');

const ficheRouter = require('./routes/fiches');
const userRouter = require('./routes/users');

const app = express();

mongoose.connect('mongodb://localhost:27017/cni-2021',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

  app.use(express.json());

  app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/fiche', ficheRouter);
app.use('/api/auth', userRouter);

module.exports = app;
