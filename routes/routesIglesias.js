const express = require('express');
const iglesias = require('../services/servicesIglesias');
const route = express.Router();

const iglesia = new iglesias();

route.get('/', async (req, resp) => {
  const data = await iglesia.finde();
  resp.json(data);
});

module.exports = route;
