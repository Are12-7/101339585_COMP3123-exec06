const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const notesRoute = require('./routes/notes');

const app = express();
const SERVER_PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());

const DB_URL = "mongodb+srv://Are12-7:Assignment1@cluster0.p880t3c.mongodb.net/lab06?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use("/api/", notesRoute);

app.route("/")
    .get((req, res) => {
        res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>")
    })


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening at http://localhost:${SERVER_PORT}/`);
});