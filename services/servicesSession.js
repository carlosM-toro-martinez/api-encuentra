const pool = require('../libs/dbConection');
const bcriptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Session {
  constructor() {
    this.sesion = {};
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log(err);
    });
  }
  async find(session) {
    const query = 'select * from users where name=$1 AND password=$2';
    const data = await this.pool.query(
      query,
      [session.name, session.password],
      async (error, results) => {
        if (!error) return results;
      }
    );
    console.log(data);
    return data;
  }
  async search(session) {
    // console.log(sesion);
    // return sesion;
    //console.log(sesion);
  }
}

module.exports = Session;
