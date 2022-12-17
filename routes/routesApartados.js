const express = require('express');
const apartados = require('../services/servicesApartados');
const route = express.Router();

const apartado = new apartados();

route.get('/', async (req, resp) => {
  const data = await apartado.finde();
  resp.json(data);
});

module.exports = route;
