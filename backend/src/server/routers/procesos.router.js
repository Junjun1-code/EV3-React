const { Router } = require('express')
const authMiddleware = require('../middlewares/auth.middleware.js')
const procesosController = require('../controllers/procesos.controller.js')

const router = Router()

// Rutas para procesos (requiere autenticación)

router.get('/', authMiddleware, procesosController.ProcessfindAll)
router.get('/:id', authMiddleware, procesosController.ProcessfindById)
router.put('/:id', authMiddleware, procesosController.ProcessupdateById)
router.delete('/:id', authMiddleware, procesosController.ProcessdeleteById)

module.exports = router
