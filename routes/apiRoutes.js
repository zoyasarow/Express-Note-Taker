const router = require('express').Router();
const fs = require('fs');
//using id assignment module 
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

//GET route for retrieving notes
router.get('/notes', (req,res) => {
    console.log('Your notes have been grabbed!');
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(400).send('There was an error grabbing your notes!');
        
        } else {
            res.json(JSON.parse(data));
        }
    })
});

//POST route for user input of notes
router.post('/notes', (req, res) => {
    console.table(req.body);
    const { title, text } = req.body;
    
    db.push({ title, text, id: uuidv4() });


    fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
        if (err) {
            console.log(err);
        
        } 
       console.log('Your note has been added!');
    });
    res.status(200).json('New note added!');
});

//DELETE route
router.delete('notes/${id}', (req, res) => {
    const { title, text } = req.body;
    
    db.delete({ title, text, id: uuidv4() });

    fs.writeFile('./db/db.json', JSON.stringify(db), function(err){
        if (err) {
            console.log(err);
        
        } 
       console.log('Your note has been deleted');
    });
    res.status(200).json('Note deleted!'); 
});

module.exports = router;
