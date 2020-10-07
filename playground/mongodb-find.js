const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to mongo');
    }
    // db.collection('Todos')
    // .find({ _id: new ObjectID('5f7d7cd86899b51ac3105954') })
    // .toArray()
    // .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch', err);
    //     })
    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch', err);
    //     })
    //Db.close();
    // db.collection('Users')
    //     .find({ name: 'Salah' })
    //     .count()
    //     .then((count) => {
    //         console.log(`${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch', err);
    //     })
    db.collection('Users')
        .find({ name: 'Salah' })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch', err);
        })
});