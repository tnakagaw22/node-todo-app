// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID("5c1e982743efacb8dba94cbd")
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     })

    db.collection('Users').findOneAndUpdate({
        name: "TO"
    }, {
            $inc: {
                age: 1
            },
            $set: {
                location: "NY"
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

    db.close();
});