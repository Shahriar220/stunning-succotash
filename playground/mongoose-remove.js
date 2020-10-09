const { ObjectId } = require('mongodb')
const { mongoose } = require('.././server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/users')

Todo.remove({}).then((result) => {
        console.log(result)
    })
    //Todo.findOneAndRemove()
Todo.findByIdAndRemove('5f808276af24bbce26b28ca0').then((todo) => {
    console.log(todo);
})