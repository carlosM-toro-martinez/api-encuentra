const iglesias = require('../datas-json/iglesias.json');

class iglesiasServices {
  constructor() {}

  finde() {
    const data = iglesias;
    return data;
  }
}

module.exports = iglesiasServices;
