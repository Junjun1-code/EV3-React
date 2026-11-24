const pg = require('pg')

const { Pool } = pg

const config = {
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    db: process.env.PGSSLMODE
  }
}

const pool = new Pool(config)

pool.connect()
  // .then(() => console.log('✅ Conexión exitosa a PostgreSQL'))
  .catch((err) => console.error('❌ Error de conexión:', err.message, err.code))

const db = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch((error) => {
    console.error('❌ Error en query:', error.message)
    return error
  })

module.exports = db
