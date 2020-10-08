//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID, Db } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
    (err, Db) => {
        if (err) {
            return console.log('unable to connect to mongo');
        }
        console.log('Connected to mongodb server');

        // Db.collection('Todos')
        //     .deleteMany({ text: 'Eat lunch' })
        //     .then((result) => {
        //         console.log(result);
        //     })

        // Db.collection('Todos')
        //     .deleteOne({ text: 'Eat lunch' })
        //     .then((result) => {
        //         console.log(result);
        //     })

        //client.close();

        // Db.collection('Todos')
        //     .findOneAndDelete({ completed: false })
        //     .then((result) => {
        //         console.log(result);
        //     })


    });