// const express = require('express');
// const sessions = require('../services/servicesSession');
// const route = express.Router();
// const pool = require('../libs/dbConection');
// const bcriptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { promisify } = require('util');

// const session = new sessions();

// const auth = async (req, res, next) => {
//   console.log(req.cookies);
//   if (req.cookies.jwt) {
//     try {
//       const query = 'select * from users where id=$1';
//       const decodificada = await promisify(jwt.verify)(
//         req.cookies.jwt,
//         process.env.JWT_SECRETO
//       );
//       await pool.query(query, [decodificada.id], (error, results) => {
//         if (!results) {
//           return next();
//         }
//         req.user = results[0];
//         return next();
//       });
//     } catch (error) {
//       console.log(error);
//       return next();
//     }
//   } else {
//     res.send({ data: false });
//   }
// };

// route.post('/', auth, async (req, res) => {
//   const query = 'select * from users where name=$1 AND password=$2';
//   await pool.query(
//     query,
//     [req.body.name, req.body.password],
//     async (error, results) => {
//       if (!error) res.send(results.rows[0]);
//     }
//   );
// });

// route.get(
//   '/logout',
//   (req, res, next) => {
//     res.clearCookie('jwt');
//     next();
//   },
//   (req, res) => {
//     res.send('usuario eliminado');
//   }
// );

// route.post('/login', async (req, res) => {
//   const query = 'select * from users where name=$1 AND password=$2';
//   await pool.query(
//     query,
//     [req.body.name, req.body.password],
//     async (error, results) => {
//       if (error) {
//         console.log(error);
//         res.send({ user: false });
//       } else {
//         const id = results.rows[0].id;
//         const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
//           expiresIn: process.env.JWT_TIEMPO_EXPIRA,
//         });
//         const cookiesOptions = {
//           expires: new Date(
//             Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//           ),
//           httpOnly: true,
//         };
//         res.cookie('jwt', token, cookiesOptions);
//         res.send(results.rows[0]);
//       }
//     }
//   );
// });

// module.exports = route;
//module.exports = data;
