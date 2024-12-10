const bodyParser = require("body-parser");

// JavaScript source code
const express = required('express');
const app = express();
const mongoose = required('mongoose')
const { MongoClient } = required('mongodb');
const path = required('path');

const Campsite = required('./models/campsite_data');

const uri = 'mongodb+srv://brianto:admin@cluster0.o1tli.mongodb.net/campsite_data?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

async function main() {
    try {
        await mongoose.connect(uri);
        console.log('Mongoose Connected!');
    } catch (error) {
        console.error('Mongoose connection error:', error)
    }
    try {
        await client.connect();
        console.log('Client Connected!')
    } catch (error) {
        console.error('Client connection error:', error)
    }
}

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

main()
    .then(console.log())
    .catch((err) => console.log(err))
    .finally()