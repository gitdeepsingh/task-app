//CRUDs

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.warn('Unable to connect to the database!');
    }
    const db = client.db(dbName);

    //CREATE
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

    // //READ
    // db.collection('users').findOne({ name: 'Devyani'}, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch');
    //     }
    //     if (user)  console.log('user one: ', user);
    //     else console.log('No such user found!');
    // })

    // db.collection('users').findOne({ _id: new ObjectId('5da043d8e1ab2ce66cf4d1a7')}, (error, user) => {
    //     if (error) {
    //         console.log('Unable to fetch');
    //     }
    //     if (user)  console.log('user two: ', user);
    //     else console.log('No such user found!');
    // })

    // db.collection('users').find({age: 27}).toArray((error, users)=>{
    //     if (error) {
    //         console.log('Unable to fetch');
    //     }
    //     console.log('users: ', users);
    // })

    // //find with 'count' cursor
    // db.collection('users').find({age: 27}).count((error, count)=>{
    //     if (error) {
    //         console.log('Unable to fetch');
    //     }
    //     console.log('total users: ', count);
    // })

    // db.collection('tasks').find({completed: false}).count((error, count)=>{
    //     if (error) {
    //         console.log('Unable to fetch');
    //     }
    //     console.log('total not completed: ', count);
    // })

    // // UPDATE
    // db.collection('users').updateOne({
    //     _id: new ObjectId("5d9f8cc96a667fb7a4f2241f")
    // }, {
    //     $set: {
    //         name: 'Khan'
    //     },
    //     $inc: {
    //         age: 1
    //     }
    // }).then(res => {
    //     console.log('users res---', res.result);
    // }).catch(err => {
    //     console.log('Error: ', err);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(res => {
    //     console.log('tasks res', res.result);
    // }).catch(err => {
    //     console.log('Error: ', err);
    // })

    //DELETE
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then(res=>{
    //     console.log('users res', res.result);
    // }).catch(err=>{
    //     console.log('Error: ', err);
    // })

    // db.collection('tasks').deleteOne({
    //     description : "Goto gym today."
    // }).then(res=>{
    //     console.log('tasks res', res.result);
    // }).catch(err=>{
    //     console.log('Error: ', err);
    // })
});