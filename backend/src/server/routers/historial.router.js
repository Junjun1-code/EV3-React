const { Router } = require('express')
const authMiddleware = require('../middlewares/auth.middleware.js')
const historialController = require('../controllers/historial.controller.js')

const router = Router()

// Rutas para procesos (requiere autenticación)

router.get('/history', authMiddleware, historialController.HistoryfindAll)
router.get('/history/:id', authMiddleware, historialController.HistoryfindById)

// router.put('/:id', authMiddleware, historialController.HistoryupdateById)
// router.delete('/:id', authMiddleware, historialController.HistorydeleteById)

module.exports = router
