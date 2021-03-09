const Sequelize  = require('sequelize');

const sequelize = new Sequelize('questionario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
});

try {
    sequelize.authenticate().then(()=>{
        console.log()
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = sequelize