const { Router } = require('express')
const catalogController = require('../controllers/catalog.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

const router = Router()

router.get('/catalog', catalogController.ProductfindAll)
router.get('/catalog/:id', catalogController.ProductfindById)
router.post('/catalog', authMiddleware, catalogController.Productcreate)
router.put('/catalog/:id', authMiddleware, catalogController.ProductupdateById)
router.delete('/catalog/:id', authMiddleware, catalogController.ProductdeleteById)

module.exports = router
