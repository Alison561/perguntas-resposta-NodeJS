const respostas  = require('../Database/respostas');

exports.insert = (resp, id)=>{
    respostas.create({
       resposta: resp,
       idPergunta: id
   })
}
exports.select = async(id)=>{
    var select = await respostas.findAll({
        where:{
            idPergunta: id
        },
        raw:true,
        order:[
            ['id', 'DESC']
        ]
    })
    return select
}