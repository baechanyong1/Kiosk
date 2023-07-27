const {Sequelize} = require('sequelize');
const config = require('../config.js');

const db = config.db;

class DBConnector{
    sequelize;
    constructor(){
        this.sequelize = new Sequelize(
                    db.database,
                    db.username,
                    db.password
                    ,{
                        host:db.host,
                        dialect:'mysql',
                        logging:false
                    }
                );
            }
    connectDB(){
        this.sequelize.sync()
        .then(()=>{
            console.log('DB연결 성공');
            console.log('🔥'.repeat(40));
        })
        .catch((e)=>{
            console.error(e);
            throw new Error('DB연결 실패');
        });
    }
    testConnectDB(){
        this.sequelize.authenticate()
        .then(()=>{
            console.log('🛸'.repeat(40));
            console.log('Test Connection is Success 😍');
        })
        .catch((e)=>{
            console.error(e);
            throw new Error('Fail to test to connect..😥');
        });
    }
}

const connector = new DBConnector();

module.exports = connector;