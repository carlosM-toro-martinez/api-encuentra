const express = require('express');
const route = express.Router();
const museos = require('../services/servicesMuseos');

const museo = new museos();

route.get('/', async (req, resp) => {
  const data = await museo.find();
  resp.json(data);
});

module.exports = route;
