const app = require('express')();
const path = require('path');



app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
})
const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://admin:password@mongodb';
const client = new MongoClient(url);

// Database Name
const dbName = 'user_account';


app.get('/users', async function(req, res) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = await db.collection('users');
        const users = await collection.find().toArray();
        res.send(users);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to MongoDB');
      }
      
})
app.listen(3000, function(){
    console.log("hello world");
})