//const sequelize = require('../libs/dbConnectionORM');
const museos = require('../datas-json/museos.json');

class museosServices {
  constructor() {}

  async find() {
    // const query = 'select * from task';
    // const [data] = await sequelize.query(query);
    const data = museos;
    return data;
  }
}

module.exports = museosServices;
