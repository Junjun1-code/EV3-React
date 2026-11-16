const sql = require('../models/historial.models.js')

module.exports.HistoryfindAll = (req, res) => sql.HistoryfindAll()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.HistoryfindById = (req, res) => sql.HistoryfindById(req.params.id)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

module.exports.Historycreate = (req, res) => sql.Historycreate(req.body)
  .then(([result]) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

// module.exports.HistoryupdateById = (req, res) => sql.HistoryupdateById(req.params.id, req.body)
//   .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
//   .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

// module.exports.HistorydeleteById = (req, res) => sql.HistorydeleteById(req.params.id)
//   .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
//   .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
