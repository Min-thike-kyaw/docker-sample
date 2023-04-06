const app = require('express')();
const path = require('path');

// const MongoClient = require('mongodb').MongoClient;




app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
})
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://admin:password@localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'user_account';

// async function main() {
//   // Use connect method to connect to the server
//   console.log('Connected successfully to server');
  

//   // the following code examples can be pasted here...

//   return 'done.';
// }
// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());
app.get('/users', async function(req, res) {
    await client.connect();
    // var db= client.db('user_account');
    const db = client.db(dbName);
    const collection = await db.collection('users');
    const users = await collection.find().toArray();
    res.send(users);
    })
app.listen(3000, function(){
    console.log("hello world");
})