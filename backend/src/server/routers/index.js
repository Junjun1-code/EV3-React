const usuariosRouter = require('./usuarios.router.js')
const productosRouter = require('./productos.router.js')
const procesosRouter = require('./procesos.router.js')
const historialRouter = require('./historial.router.js')

const errors = require('./errors.router.js')

module.exports = { usuariosRouter, productosRouter, procesosRouter, historialRouter, errors }
