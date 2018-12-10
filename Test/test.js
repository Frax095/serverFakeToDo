var assert = require('assert');
var request = require('supertest');
var app = require('../app');

it('Test addToDo', function(done){
    request(app)
    .post('/todos')
    .set('Accept', 'application/json')
    .send({name: 'go to school', description: 'hour 7am', assignedTo:'Ciccio'})
    .expect(201)
    .end(function(err, res) {
        if (err) return done(err);
        done(); 
    });

})

it('Test addToDo', function(done){
    request(app)
    .post('/todos')
    .set('Accept', 'application/json')
    .send({name: 'go to cinema', description: 'hour 10pm', assignedTo:'Turi'})
    .expect(201)
    .end(function(err, res) {
        if (err) return done(err);
        done(); 
    });

})

it('Test putCompletedById', function(done){
    request(app)
    .put('/todos/id')
    .set('Accept', 'application/json')
    .send({id: 1})
    .expect(200)
    .end(function(err, res){
        if(err) return done(err);
        done();
    });

})

it('test getToDoByUser', function(done){
    request(app)
    .get('/todos/assignedTo')
    .set('Accept', 'application/json')
    .send({assignedTo: 'Ciccio'})
    .expect(200)
    .end(function(err, res) {
        if(err) return done(err);
        done ();
    })
})

it('test getToDoByCompleted', function(done){
    request(app)
    .get('/todos/completed')
    .set('Accept', 'application/json')
    .send({completed: false})
    .expect(200)
    .end(function(err, res) {
        if(err) return done(err);
        done ();
    })
})

it('test deleteToDoById', function(done){
    request(app)
    .delete('/todos/id')
    .set('Accept', 'application/json')
    .send({id: 0})
    .end(function(err, res) {
        if(err) return done(err);
        done ();
    })
})

//Cancellando il toDo con id:0 ci tornerà i toDo restanti nella stampa

it('test getToDoByCompleted', function(done){
    request(app)
    .get('/todos/completed')
    .set('Accept', 'application/json')
    .send({completed: false})
    .expect(200)
    .end(function(err, res) {
        if(err) return done(err);
        done ();
    })
})

//Torna dunque un array vuoto nell'ultimo getToDoByCompleted