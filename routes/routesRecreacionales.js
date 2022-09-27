const express = require('express');
const recreacionales = require('../services/servicesRecreacionales');
const route = express.Router();

const recreacional = new recreacionales();

route.get('/', async (req, resp) => {
  const data = await recreacional.find();
  resp.send(data);
});

module.exports = route;
