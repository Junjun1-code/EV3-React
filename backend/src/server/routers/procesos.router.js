const { Router } = require('express')
const authMiddleware = require('../middlewares/auth.middleware.js')
const procesosController = require('../controllers/procesos.controller.js')

const router = Router()

// Rutas para procesos (requiere autenticación)

router.get('/process', authMiddleware, procesosController.ProcessfindAll)
router.get('/process/:id', authMiddleware, procesosController.ProcessfindById)
router.put('/process/:id', authMiddleware, procesosController.ProcessupdateById)
router.delete('/process/:id', authMiddleware, procesosController.ProcessdeleteById)

module.exports = router
