/* eslint-disable camelcase */
const db = require('../database/db_connect.js')

module.exports.ProcessfindAll = () => db('SELECT * FROM procesos;')

module.exports.ProcessfindById = (process_id) => db('SELECT * FROM procesos WHERE process_id = $1;', [process_id])

module.exports.Processcreate = ({ process_name, process_class, process_state }) =>
  db('INSERT INTO procesos (process_id, process_name, process_class, process_state, ) VALUES (DEFAULT, $1, $2, $3) RETURNING *;', [process_name, process_class, process_state])

// eslint-disable-next-line camelcase
module.exports.ProcessupdateById = (process_id, { process_name, process_class, process_state }) =>
  db('UPDATE procesos SET process_name = $2, process_class=$3, process_state = $4 WHERE process_id = $1 RETURNING *;', [process_id, process_name, process_class, process_state])

module.exports.ProcessdeleteById = (id) => db('DELETE FROM procesos WHERE process_id = $1 RETURNING *;', [process_id])
