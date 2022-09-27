const eventos = require('../datas-json/eventos.json');

class eventosServices {
  constructor() {}

  finde() {
    const data = eventos;
    return data;
  }
}

module.exports = eventosServices;
