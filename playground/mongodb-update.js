//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, db) => {
        if (err) {
            return console.log('unable to connect to mongo');
        }
        console.log('Connected to mongodb server');

        // db.collection('Todos').findOneAndUpdate({
        //     _id: new ObjectID('5f7dbf922be2e39f87ba3961')
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }, {
        //     returnOriginal: false
        // }).then((result) => {
        //     console.log(result);
        // })
        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5f7d96e39e14fc1ee510e609')
        }, {
            $set: {
                completed: true
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })
    });