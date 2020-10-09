var express = require('express')
var bodyParser = require('body-parser')
var { ObjectID } = require('mongodb')
var { mongoose } = require('./db/mongoose')
const _ = require('lodash')
var { Todo } = require('./models/todo')
var { User } = require('./models/users')
const { remove } = require('lodash')

var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })
    todo.save().then((d) => {
        res.send(d);
    }, (e) => {
        res.status(400).send(e);
    })
})

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({
                todos
            })
        }, (e) => {
            res.status(400).send(e);
        })
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }
            res.send({ todo })
        }).catch((e) => { res.status(400).send() })
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id)
        .then((doc) => {
            if (!todo) {
                return res.status(400).send();
            }
            res.send({ todo })
        }).catch((e) => res.status(400).send())
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((todo) => {
            if (!todo) {
                return res.status(400).send();
            }
            res.send({ todo })
        }).catch((e) => res.status(400).send())
})

app.listen(port, () => {
    console.log(`started on port ${port}`);
})

module.export = { app }