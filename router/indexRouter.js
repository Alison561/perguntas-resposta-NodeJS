const express = require('express')
const router = express.Router();
const homeController = require('../App/Controlles/homeController')

router.get('/', homeController.home)

router.get('/pergunta', homeController.pergunta)
router.post('/pergunta', homeController.pergunta)

router.get('/:id', homeController.resposta)
router.post('/:id', homeController.resposta)

module.exports = router