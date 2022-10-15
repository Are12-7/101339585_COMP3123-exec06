const express = require('express');
const NotesModel = require('../models/Notes');
const router = express.Router();

//TODO - Create a new Note

//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async (req, res) => {
    // Validate request
    const newNote = new NotesModel(req.body);
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try {
        await newNote.save()
        res.status(201).send(newNote)
    } catch (error) {
        res.status(500).send({message: "Error while inserting Note"})
    }
    
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    try {
        const notes = await NotesModel.find()
        res.status(200).send(notes)
    } catch (error) {
        res.status(500).send({message: "No Notes Found"})
    }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try {
        console.log(req.body);
        const noteById = await NotesModel.findById(req.params.noteId);
        res.status(200).send(noteById);       
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.patch('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
    try {
        console.log(req.body)
        const updatedNote = await NotesModel.findByIdAndUpdate(req.params.noteId, req.body)
        //console.log(updateNote)
        const newNote = await updatedNote.save()
        res.status(202).send(newNote)
      } catch (err) {
        res.status(500).send(err)
      }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        const note = await NotesModel.findByIdAndDelete(req.params.noteId)
    
        if (!note) { 
            res.status(404).send("No item found")
        }
        res.status(200).send(note)
      } catch (err) {
        res.status(500).send(err)
      }
});

module.exports = router;
