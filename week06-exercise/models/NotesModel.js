const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
    },
    noteDescription: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
    },
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        required: true,
        maxlength: 50,
    },
    dateAdded: {
        type: Date,
        required: true,
    },
    dateUpdated: {
        type: Date
    }
})

module.exports = mongoose.model("note", noteSchema);