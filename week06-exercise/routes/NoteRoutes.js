const express = require("express");
const NotesModel = require('../models/NotesModel.js');
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/notes', async(req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try{
        const newNote = new NotesModel({
            ...req.body
        })
        await newNote.save();
        res.status(201).send(newNote);
    }catch(error){
        res.status(500).send(error);
    }
   
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/notes', async(req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try{
        const noteList = await NotesModel.find({});
        res.status(200).send(noteList);
    }catch(error){
        res.status(500).send(error);
    }
    
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try{
        const note = await NotesModel.findOne({_id: req.params.noteId});
        res.status(200).send(note);
    }catch(error){
        res.status(500).send(error);
    }
    
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try{
        const {noteTitle, noteDescription, priority, dateAdded, dateUpdated} = req.body;
        const doc = await NotesModel.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true});
        res.status(200).send(doc);
    }catch(error){
        res.status(500).send(error);
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    try{
        const note = await NotesModel.findOneAndDelete(req.params.noteId); 
        if(!note){
            res.status(404).send({message: 'Note not found'});
        }else{
            res.status(204).send();
        }
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = router;

