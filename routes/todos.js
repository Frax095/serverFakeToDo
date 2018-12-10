var express = require('express');
var router = express.Router();
var fakeToDo = require('fakeToDo');

/*
POST Di Creazione ToDo
PUT di modifica di ToDo in base all'id
GET lettura di tutti i ToDo filtrata per utente
GET lettura di tutti gli utenti disponibili
GET lettura di tutti i ToDo filtrata per stato di completamento
DELELTE Cancellazione di un ToDo tramite id
*/

router.post('/', function (req, res) {
    console.log(fakeToDo.addToDo(req.body.name, req.body.description, req.body.assignedTo))
    res.status(201).json();
});

router.put('/id', function(req, res){
    console.log(fakeToDo.putCompletedById(req.body.id));
    res.status(200).json();
})

router.get('/assignedTo', function(req, res){
    console.log(fakeToDo.getToDoByUser(req.body.assignedTo));
    res.status(200).json();
});

router.get('/completed', function (req, res){
    console.log(fakeToDo.getToDoByCompleted(req.body.completed));
    res.status(200).json();
});

router.delete('/id', function (req, res){
    console.log(fakeToDo.deleteToDoById(req.body.id));
    res.status(200).json();
})

module.exports = router;