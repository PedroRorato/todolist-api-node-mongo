const mongoose = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' ,
        required: true
    }
});

//ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Task', TaskSchema);