const { Router } = require('express')
const productosController = require('../controllers/productos.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

const router = Router()

router.get('/productos', productosController.ProductfindAll)
router.get('/productos/:id', productosController.ProductfindById)
router.post('/productos', authMiddleware, productosController.Productcreate)
router.put('/productos/:id', authMiddleware, productosController.ProductupdateById)
router.delete('/productos/:id', authMiddleware, productosController.ProductdeleteById)

module.exports = router
