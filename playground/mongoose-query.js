const { ObjectId } = require('mongodb')
const { mongoose } = require('.././server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/users')
    // var id = '5f7f207117b4d1c12ce7a16b'
    // if (!ObjectId.isValid(id)) {
    //     console.log('id not valid')
    // }
    // Todo.find({
    //     _id: id
    // }).then((todos) => {
    //     console.log(todos);
    // })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found')
//     }
//     console.log('todo by id', todo);
// }).catch((e) => console.log(e))

var id = '5f7f48158199a5233896702a'

User.findById(id)
    .then((user) => {
        if (!user) {
            console.log('Not a valid user');
        }
        console.log(user);
    }).catch((e) => console.log(e))