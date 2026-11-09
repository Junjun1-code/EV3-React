const sql = require('../models/procesos.models.js')

module.exports.ProcessfindAll = (req, res) => sql.ProcessfindAll()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ProcessfindById = (req, res) => sql.ProcessfindById(req.params.id)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.Processcreate = (req, res) => sql.Processcreate(req.body)
  .then(([result]) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ProcessupdateById = (req, res) => sql.ProcessupdateById(req.params.id, req.body)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ProcessdeleteById = (req, res) => sql.ProcessdeleteById(req.params.id)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
