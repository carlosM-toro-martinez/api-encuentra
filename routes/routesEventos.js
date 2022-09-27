const express = require('express');
const eventos = require('../services/servicesEventos');
const route = express.Router();

const evento = new eventos();

route.get('/', async (req, resp) => {
  const data = await evento.finde();
  resp.send(data);
});

module.exports = route;
