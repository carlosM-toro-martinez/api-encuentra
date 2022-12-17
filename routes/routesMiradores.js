const express = require('express');
const miradores = require('../services/servicesMiradores');
const route = express.Router();

const mirador = new miradores();

route.get('/', async (req, resp) => {
  const data = await mirador.finde();
  resp.json(data);
});

module.exports = route;
