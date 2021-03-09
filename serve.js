const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const indexRouter = require('./router/indexRouter')
app.set('view engine', 'ejs');
app.set('views', './App/Views');


app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter)

app.listen(3000)