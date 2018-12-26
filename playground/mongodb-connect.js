// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const keys = require('./config/keys');

MongoClient.connect(keys.mongoURI, (err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    // db.collection('Users').insertOne({
    //     name: 'MO',
    //     age: 30,
    //     location: 'NJ'
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops));
    // });


    db.close();
});