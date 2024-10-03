const sql = require('mssql')
const SqlConfig = require('../../../Config/DB').SqlConfig

// exports.DbConnection = async () => {
exports.DbConnection = async () => {
    try {
        // const Connection = await sql.connect(SqlConfig)
        const Connection = await sql.connect(SqlConfig)

        return Connection
    } catch (err) {
        console.log(`🚀 ~ file: Connection.js ~ line 14 ~ //exports.DbConnection= ~ err`, err)
    }
}

// exports.DbRequest = async () => {
//     try {
//         const Connection = await this.DbConnection()
//         const Request = new sql.Request(Connection)

//         return Request
//     } catch (err) {
//         console.log(`🚀 ~ file: Connection.js ~ line 26 ~ //exports.DbRequest=async ~ err`, err)
//     }
// }

const poolPromise = new sql.ConnectionPool(SqlConfig).connect()
    .then(pool => {
        console.log('Connected to MSSQL')
        return pool
    }).catch(err => {
        console.log(`🚀 ~ file: Connection.js ~ line 34 ~ //exports.DbRequest=async ~ err`, err)
    })

exports.DbRequest = async () => {
    return sql, poolPromise
}

exports.DbRequestNonPool = async () => {
    try {
        const Connection = await this.DbConnection()
        const Request = new sql.Request(Connection)

        return Request
    } catch (err) {
        console.log(`🚀 ~ file: Connection.js ~ line 26 ~ //exports.DbRequest=async ~ err`, err)
    }
}