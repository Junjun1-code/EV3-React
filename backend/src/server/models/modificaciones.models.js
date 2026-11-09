/* eslint-disable camelcase */
const db = require('../database/db_connect.js')

module.exports.ModificationfindAll = () => db('SELECT * FROM modificaciones;')

module.exports.ModificationfindById = (change_id) => db('SELECT * FROM modificaciones WHERE change_id = $1;', [change_id])

module.exports.Modificationcreate = ({ change_type, change_desc, change_value, change_previous }) =>
  db('INSERT INTO modificaciones (change_id, change_type, change_desc, change_value, change_previous) VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *;', [change_type, change_desc, change_value, change_previous])

// // eslint-disable-next-line camelcase
// module.exports.ModificationupdateById = (id, { nombre, descripcion, precio, imagen_url }) =>
//   db('UPDATE modificaciones SET nombre = $2, descripcion=$3, precio = $4, imagen_url = $5 WHERE change_id = $1 RETURNING *;', [id, nombre, descripcion, precio, imagen_url])

module.exports.ModificationdeleteById = (id) => db('DELETE FROM modificaciones WHERE change_id = $1 RETURNING *;', [id])
