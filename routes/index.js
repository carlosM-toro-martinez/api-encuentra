const express = require('express');
const routeMuseo = require('./routesMuseos');
const routeRecreacional = require('./routesRecreacionales');
const routeEventos = require('./routesEventos');

function router(app) {
  const routes = express.Router();
  app.use('/api/v1', routes);
  routes.use('/museos', routeMuseo);
  routes.use('/recreacionales', routeRecreacional);
  routes.use('/eventos', routeEventos);
}

module.exports = router;
