const apartados = require('../datas-json/apartados.json');

class apartadosServices {
  constructor() {}

  finde() {
    const data = apartados;
    return data;
  }
}

module.exports = apartadosServices;
