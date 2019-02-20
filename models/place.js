const { Schema, model } = require('mongoose');

const Place = model('place', new Schema({
  coordinates: {
    type: String,
    required: true,
  },
}));

module.exports = Place;
