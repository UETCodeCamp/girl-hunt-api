const Mongoose = require('mongoose');
const {Schema} = Mongoose;
const connection = require('../app.database');

const commentSchema = new Schema({
    post: {
        type: Schema.ObjectId,
        index: true,
        ref: 'Post'
    },
    owner: {
        type: Schema.ObjectId,
        index: true,
        ref: 'User'
    },
    content: {
        type: String
    },
    totalVotes: {
        type: Number,
        default: 0,
        index: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

module.exports = connection.model('Comment', commentSchema);