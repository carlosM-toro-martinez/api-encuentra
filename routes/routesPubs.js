const express = require('express');
const pubs = require('../services/servicesPubs');
const route = express.Router();

const pub = new pubs();

route.get('/', async (req, resp) => {
  const data = await pub.finde();
  resp.json(data);
});

module.exports = route;
