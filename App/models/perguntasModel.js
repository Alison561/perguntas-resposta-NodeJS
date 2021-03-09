const perguntas  = require('../Database/perguntas');

exports.insert = (titulo, desc)=>{
    perguntas.create({
       titulo: titulo,
       descricao: desc
   })
}

exports.select = async()=>{
    var select = await perguntas.findAll({
        raw:true,
        order:[
            ['id', 'DESC']
        ]
    })
    return select
}

exports.selectId = async(id)=>{
    var select = await perguntas.findOne({
        where:{
            id: id
        }
    })
    return select
}