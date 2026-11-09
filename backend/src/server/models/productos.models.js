/* eslint-disable camelcase */
const db = require('../database/db_connect.js')

module.exports.ProductfindAll = () => db('SELECT * FROM productos;')

module.exports.ProductOrderByDiscount = (product_id) => db("SELECT * FROM productos ORDER BY CASE WHEN discount IS NOT NULL THEN 1 ELSE 2 END ASC, nombre ASC RETURNING *;", [product_id])

module.exports.ProductfindById = (product_id) => db('SELECT * FROM productos WHERE product_id = $1;', [product_id])

module.exports.Productcreate = ({ product_name, product_desc, price, discount, img_url }) =>
  db('INSERT INTO productos (product_id, product_name, description, price, discount, img_url) VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *;', [product_name, product_desc, price, discount, img_url])

// eslint-disable-next-line camelcase
module.exports.ProductupdateById = (product_id, { product_name, description, price, discount, img_url }) =>
  db('UPDATE productos SET product_name = $2, description=$3, price = $4, discount = $5, img_url = $6 WHERE product_id = $1 RETURNING *;', [product_id, product_name, description, price, discount, img_url])

module.exports.ProductdeleteById = (product_id) => db('DELETE FROM productos WHERE product_id = $1 RETURNING *;', [product_id])
