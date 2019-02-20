const express = require('express');
const Place = require('../models/place');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const places = await Place.find({});
    return res.json(places);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let place = new Place({ coordinates: req.body.coordinates });
    place = await place.save();
    return res.send(place);
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.put('/:id', (req, res) => {
  res.send('Place was updated');
});

router.delete('/:id', (req, res) => {
  res.send('Place was deleted');
});

module.exports = router;
