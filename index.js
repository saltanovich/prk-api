const express = require('express');
const mongoose = require('mongoose');
const { dbString } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(dbString, { useNewUrlParser: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err.message));

app.get('/', (req, res) => {
  res.send('It works!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
