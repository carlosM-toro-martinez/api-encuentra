const express = require('express');
const routeMuseo = require('./routesMuseos');
const routeRecreacional = require('./routesRecreacionales');
const routeEventos = require('./routesEventos');
const routeMiradores = require('./routesMiradores');
const routePubs = require('./routesPubs');
const routeIglesias = require('./routesIglesias');
const routeApartados = require('./routesApartados');
const routeSession = require('./routesSession');

function router(app) {
  const routes = express.Router();
  app.use('/api/v1', routes);
  routes.use('/museos', routeMuseo);
  routes.use('/recreacionales', routeRecreacional);
  routes.use('/eventos', routeEventos);
  routes.use('/miradores', routeMiradores);
  routes.use('/pubs', routePubs);
  routes.use('/iglesias', routeIglesias);
  routes.use('/apartados', routeApartados);
  routes.use('/sessions', routeSession);
}

module.exports = router;
