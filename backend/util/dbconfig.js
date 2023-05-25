const dbConfig = async () => {
    const sequelize = require('./database');
    const Lead = require('../models/Query.model')
    const result = await sequelize.sync();
}
module.exports = dbConfig;