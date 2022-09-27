//const sequelize = require('../libs/dbConnectionORM');
const recreacionales = require('../datas-json/recreacionales.json');

class museosServices {
  constructor() {}

  async find() {
    // const query = 'select * from task';
    // const [data] = await sequelize.query(query);
    const data = recreacionales;
    return data;
  }
}

module.exports = museosServices;
