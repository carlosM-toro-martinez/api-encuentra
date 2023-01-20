const apartados = require('../datas-json/apartados.json');
const io = require('../index');
console.log(io);

class apartadosServices {
  constructor() {}

  finde() {
    const data = apartados;
    return data;
  }
}

module.exports = apartadosServices;
