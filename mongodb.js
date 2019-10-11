//CRUDs

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.warn('Unable to connect to the database!');
    }
    console.log('Connected Successfully!');
    const db = client.db(dbName);

    db.collection('users').insertOne({
        name: 'Deep Singh',
        age: 27
    })
});