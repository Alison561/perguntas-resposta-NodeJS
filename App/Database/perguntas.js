const Sequelize = require('Sequelize');
const con  = require('./connection.js');

const pergunta = con.define('perguntas', {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false
    }
}, {
  timestamps: false
})

pergunta.sync().then(()=>{
  console.log()
})

module.exports = pergunta