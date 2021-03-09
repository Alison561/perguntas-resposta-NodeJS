const Sequelize = require('Sequelize');
const con  = require('./connection.js');

const respostas = con.define('respostas', {
    resposta: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    idPergunta: {
      type: Sequelize.TEXT,
      allowNull: false
    }
}, {
  timestamps: false
})

respostas.sync().then(()=>{
  console.log()
})

module.exports = respostas