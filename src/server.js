const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes');
//Start Database
mongoose.connect('mongodb://localhost:27017/simpleTodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Start App
const app = express();
//Enable JSON
app.use(express.json());
//Routes
require('./models/User');

const User = mongoose.model('User')

app.get('/users', async (req, res) => {

    const users = await User.find();

    // User.create({
    //     name: 'Pedro',
    //     email: 'pedro@gmail.com'
    // })
    return res.json(users)
})
//app.use(routes);
//Listener
app.listen(3333);