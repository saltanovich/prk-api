const express = require('express');
const mongoose = require('mongoose');
const { dbString } = require('./config');
const placeRouter = require('./routes/place');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(dbString, { useNewUrlParser: true })
  .then(() => console.log('DB is connected'))
  .catch(err => console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/places', placeRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
