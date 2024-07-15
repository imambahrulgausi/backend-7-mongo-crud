const express = require('express');
const app = express();
const router = express.Router();
const port = 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Sukses Tekoneksi dengan mongodb");
});



app.listen(port, () => {
    console.log(`server berjalan pada localhost:${port}`)
});