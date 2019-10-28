//CRUDs

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectId } = require('mongodb');

//know IDs
// const id = new ObjectId();
// console.log('id: ', id);
// console.log('id binary: ', id.id);
// console.log('id binary length: ', id.id.length);
// console.log('timestamp: ', id.getTimestamp());
// console.log('hexString: ', id.toHexString());
// console.log('hexString length: ', id.toHexString().length);

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.warn('Unable to connect to the database!');
    }
    console.log('Connected Successfully!');
    const db = client.db(dbName);
    //insertOne
    // db.collection('users').insertOne({
    //     // _id: id,
    //     _modifiedTime: id.getTimestamp(),
    //     name: 'Devyani Jaiswal',
    //     age: 27
    // },(error, result)=>{
    // if(error) {
    //     console.warn('Unable to insert user');
    // }
    // console.log(result.ops);
    // })

    //inserMany
    // db.collection('users').insertMany([
    //     {
    //         name: 'Devyani',
    //         age: 24
    //     }, {
    //         name: 'Singh',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.warn('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    //insert into tasks
    // db.collection('tasks').insertMany([{
    //     description: 'To collect newspaper daily this week.',
    //     completed: false
    // }, {
    //     description: 'Goto gym today.',
    //     completed: true
    // }, {
    //     description: 'Shop for milk and grocessary.',
    //     completed: false
    // },], (error, result) => {
    //     if (error) {
    //         console.warn('Unable to insert task')
    //     }
    //     console.log('tasks: ', result.ops)
    // })
});