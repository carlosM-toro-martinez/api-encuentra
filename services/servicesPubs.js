const pubs = require('../datas-json/pubs.json');

class pubsServices {
  constructor() {}

  finde() {
    const data = pubs;
    return data;
  }
}

module.exports = pubsServices;
