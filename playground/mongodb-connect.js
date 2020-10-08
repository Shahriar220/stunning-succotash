//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log('unable to connect to mongo');
    }
    console.log('Connected to mongodb server');

    //const db = client.db('TodoApp');

    /* db.collection('Users').insertOne({
         name: 'Shahriar',
         age: 24,
         location: 'Gazipur'
     }, (err, result) => {
         if (err) {
             return console.log('unable to insert', err);
         } else {
             console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
         }
     })*/

    client.close();
});