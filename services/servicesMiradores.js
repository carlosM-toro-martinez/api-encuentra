const miradores = require('../datas-json/miradores.json');

class miradoresServices {
  constructor() {}

  finde() {
    const data = miradores;
    return data;
  }
}

module.exports = miradoresServices;
