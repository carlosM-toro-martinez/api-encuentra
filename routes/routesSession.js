const express = require('express');
//const sessions = require('../services/servicesSession');
const route = express.Router();
const pool = require('../libs/Conection.js');
///const bcriptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

//const session = new sessions();

const auth = async (req, res, next) => {
  if (req.body.token) {
    try {
      const query = 'select * from users where id=$1';
      const decodificada = await promisify(jwt.verify)(
        req.body.token,
        process.env.JWT_SECRETO
      );
      await pool.query(query, [decodificada.id], (error, results) => {
        if (!results) {
          res.send({ data: false });
        }
        next();
      });
    } catch (error) {
      console.log(error);
      res.send({ data: false });
    }
  } else {
    res.send({ data: false });
  }
};

route.get('/', async (req, res) => {
  const query = 'select * from users';
  await pool.query(query, async (error, results) => {
    if (!error) {
      res.send(results.rows);
      console.log(results.rows);
    } else res.send({ data: false });
  });
});

route.post('/searchUser', auth, async (req, res) => {
  const query = 'select * from users where user_name = $1';
  console.log(req.body.userName);
  await pool.query(query, [req.body.userName], (err, result) => {
    if (err) {
      res.send({ data: false });
    } else {
      res.send(result.rows[0]);
    }
  });
});

route.post('/register', async (req, res) => {
  const user = {
    uid: req.body.uid,
    userName: req.body.userName,
    password: req.body.password,
    section: req.body.section,
    state: req.body.state,
  };

  const query =
    'INSERT INTO public.users(uid, "user_name", password, section, state) VALUES ($1, $2, $3, $4, $5)';
  await pool.query(
    query,
    [user.uid, user.userName, user.password, user.section, user.state],
    (err) => {
      if (err) {
        res.send({ data: false });
        console.log(err);
      } else {
        res.send({ data: true });
      }
    }
  );
});

route.post('/login', async (req, res) => {
  const query = 'select * from users where user_name=$1 AND password=$2';
  await pool.query(
    query,
    [req.body.userName, req.body.password],
    async (error, results) => {
      if (error) {
        console.log(error);
        res.send({ user: false });
      } else {
        if (results.rows[0]) {
          const id = results.rows[0].id;
          const token = jwt.sign({ id: id }, process.env.JWT_SECRETO);
          // const cookiesOptions = {
          //   expires: new Date(
          //     Date.now() +
          //       process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          //   ),
          //   httpOnly: true,
          // };
          res.cookie('jwt', token);
          // const sesion = {
          //   user_name: results.rows[0].user_name,
          //   section: results.rows[0].section,
          //   uid: results.rows[0].uid,
          // };
          // pool.query(
          //   'INSERT INTO public.sesion(user_name, section, uid) VALUES ($1, $2, $3)',
          //   [sesion.user_name, sesion.section, sesion.uid],
          //   () => {
          //     console.log('init sesion');
          //   }
          // );
          res.send({ data: results.rows[0], jwt: token });
        } else {
          res.send({ user: false });
        }
      }
    }
  );
});

route.post(
  '/logout',
  (req, res, next) => {
    res.clearCookie('jwt');
    next();
  },
  async (req, res) => {
    await pool.query(
      'DELETE FROM sesion WHERE uid=$1 AND user_name=$2',
      [req.body.uid, req.body.userName],
      (err) => {
        if (err) {
          console.log(err);
          res.send({ data: 'false' });
        } else {
          console.log('session delete');
          res.send({ data: 'true' });
        }
      }
    );
  }
);

module.exports = route;
