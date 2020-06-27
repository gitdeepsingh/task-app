//CRUDs

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = process.env.MONGODB_URL;
const dbName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.warn('Unable to connect to the database!');
    }
    const db = client.db(dbName);
});