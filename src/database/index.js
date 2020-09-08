const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simpleTodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});