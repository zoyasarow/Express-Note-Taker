const router = require('express');
const path = require('path');
const api = require('./routes/apiRoutes');

const PORT = process.env.port || 3004

const app = router();

//Middleware for parsing JSON & urlencoded data from user input
app.use(router.json());
app.use(router.urlencoded({ extended: true }));

app.use('/api', api);
app.use(router.static('public'));

//GET route for the homepage
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html')));

//GET route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html')));    

//Initializing app at port 3001
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 💭`);
});
