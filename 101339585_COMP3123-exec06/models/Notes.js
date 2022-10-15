const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    noteTitle: String,
    noteDescription: String,
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    }
}, { timestamps: true });

const Notes = mongoose.model('Notes', NotesSchema)
module.exports = Notes;

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated