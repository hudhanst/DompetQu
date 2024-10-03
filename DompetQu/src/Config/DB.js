const MicrosoftSQLDevLocal = {
    server: process.env.ENV_Secret_DB_Local_Server,
    authentication: {
        type: process.env.ENV_Secret_DBAuthType,
        options: {
            userName: process.env.ENV_Secret_DB_Local_UserName,
            password: process.env.ENV_Secret_DB_Local_Password
        }
    },
    options: {
        port: Number(process.env.ENV_Secret_DB_Local_Port),
        database: process.env.ENV_Secret_DB_Local_Database,
        encrypt: true,
        trustServerCertificate: true
    }
}

const MicrosoftSQLDevLocalIp = {
    server: process.env.ENV_Secret_DB_Local_Server,
    authentication: {
        type: process.env.ENV_Secret_DBAuthType,
        options: {
            userName: process.env.ENV_Secret_DB_Local_UserName,
            password: process.env.ENV_Secret_DB_Local_Password
        }
    },
    options: {
        port: process.env.ENV_Secret_DB_Local_Port,
        database: process.env.ENV_Secret_DB_Local_Database,
        encrypt: true,
        trustServerCertificate: true
    }
}

const MicrosoftSQLLiveServerTesting = {
    server: process.env.ENV_Secret_DB_Production_Server,
    authentication: {
        type: process.env.ENV_Secret_DBAuthType,
        options: {
            userName: process.env.ENV_Secret_DB_Production_UserName,
            password: process.env.ENV_Secret_DB_Production_Password
        }
    },
    options: {
        // port: process.env.ENV_Secret_DBPort,
        database: process.env.ENV_Secret_DB_Production_Database,
        encrypt: true,
        trustServerCertificate: true
    }
}
const MicrosoftSQLLiveServerProduction = {
    SqlConfig: {
        server: process.env.ENV_Secret_DB_Production_Server,
        authentication: {
            type: process.env.ENV_Secret_DBAuthType,
            options: {
                userName: process.env.ENV_Secret_DB_Production_UserName,
                password: process.env.ENV_Secret_DB_Production_Password
            }
        },
        options: {
            port: Number(process.env.ENV_Secret_DBPortPro),
            database: process.env.ENV_Secret_DB_Production_Database,
            encrypt: true,
            trustServerCertificate: true
        }
    }
}

const MySqlDevLocalIp = {
    host: process.env.ENV_Secret_DB_LocalIp_Server,
    port: process.env.ENV_Secret_DB_LocalIp_Port,
    user: process.env.ENV_Secret_DB_LocalIp_UserName,
    password: process.env.ENV_Secret_DB_LocalIp_Password,
    database: process.env.ENV_Secret_DB_Production_Database,
}

const MySqlLiveServerTesting = {
    host: process.env.ENV_Secret_DB_ProductionRemote_Server,
    port: process.env.ENV_Secret_DB_Production_Port,
    user: process.env.ENV_Secret_DB_Production_UserName,
    password: process.env.ENV_Secret_DB_Production_Password,
    database: process.env.ENV_Secret_DB_Production_Database,
}

const MySqlLiveServerProduction = {
    host: process.env.ENV_Secret_DB_Production_Server,
    port: process.env.ENV_Secret_DB_Production_Port,
    user: process.env.ENV_Secret_DB_Production_UserName,
    password: process.env.ENV_Secret_DB_Production_Password,
    database: process.env.ENV_Secret_DB_Production_Database,
}

module.exports = {
    LocalDBConfig: LocalSQLLiteConfig,
    ServerDBConfig: ServerMicrosoftSQLConfig,
}