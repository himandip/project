const express = require('express')
const bodyParser = require('body-parser')
//const cors=require('cors');

const{mongoose}=require('./db.js')
var subjectController=require('./controllers/subjectController.js')
var questionController=require('./controllers/questionController.js')


var app=express()
app.use(bodyParser.json())
//app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=> console.log('Server started port at : 3000'))
app.use('/subject',subjectController)
app.use('/question',questionController)
