const perguntas = require('../models/perguntasModel');
const resposta = require('../models/respostasModel');

exports.home = async(req, res)=>{
    var perg= await perguntas.select()
    res.render('index', {title: "Home", perg: perg})
}

exports.pergunta = (req, res)=>{
    res.render('perguntas', {title: "Pergunta"})
    if (req.body.per != undefined) {
        if(req.body.titulo == ''|| req.body.descricao == ''){
            console.log('campos vazios não são permitidos')
        }else{
            perguntas.insert(req.body.titulo,  req.body.descricao)
        }
    }
}
exports.resposta = async(req, res)=>{
    var perg = await perguntas.selectId(req.params.id)
    var resp = await resposta.select(req.params.id)
    if (perg == null || resp == null) {
        res.redirect("/")
    } else {
        res.render('respotas', {title: "Resposta", pergu: perg ,resp: resp})
    }
    if (req.body.res != undefined) {
        if(req.body.resposta == ''){
            console.log('campo vazio não é permitido')
        }else{
            resposta.insert(req.body.resposta,req.params.id)
        }
    }
}