const express = require('express');

const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect("mongodb+srv://gabrielnicacio:gabriel110999@cluster0-ncnuu.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(routes);
app.use(express.json( ))
app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

app.listen(3333);