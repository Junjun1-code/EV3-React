const sql = require('../models/modificaciones.models.js')

module.exports.ModificationfindAll = (req, res) => sql.ModificationfindAll()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ModificationfindById = (req, res) => sql.ModificationfindById(req.params.id)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.Modificationcreate = (req, res) => sql.Modificationcreate(req.body)
  .then(([result]) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ModificationupdateById = (req, res) => sql.ModificationupdateById(req.params.id, req.body)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.ModificationdeleteById = (req, res) => sql.ModificationdeleteById(req.params.id)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
