const router = require('express').Router();
const fs = require('fs');
//using id assignment module 
const { v4: uuidv4 } = require('uuid');

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
    console.log(req.body);
    const { title, text } = req.body;
    fs.writeFile('./db/db.json', JSON.stringify(json), function(err){
        if (err) {
            console.log(err);
        
        } else {
            const newNotes = JSON.parse(data);
            newNotes.push({ title, text, id: uuidv4() });
            fs.writeFile('./db/db.json', JSON.stringify(newNotes), 'utf-8', (error) => {
                if (error) {
                    console.log(error);
                }
            }
          ); 
        }
       console.log('Your note has been added!');
    });
    res.send('New note added!');
    res.status(200);
});

module.exports = router;
