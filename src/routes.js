const express = require('express');
const router = express.Router();
const Campus = require('./models/campus');

/********************************/
/*           Routes             */
/********************************/

/**
 * Homepage where all routes are shown
 */
router.get('/', (req, res) => {
  console.log('/ route called');
  res.send(
    '<h1>Welcome to my API, these are the available routes:</h1>'

    +'<h2>/</h2>'
    +'Where you are right now'

    +'<hr/>'

    +'<h2>/campus</h2>'
    +'Returns all campuses in the database using .find()'

    +'<hr/>'

    +'<h2>/campus/:id</h2>'
    +'<p>Returns one single campus in the database using .findById(objectId)</p>'
    +'<p>Uses req.params.id, which means the id is passed in the url</p>'
    +'<p>/campus/6191576ea6578c26ce2cdbc1 returns the campus with id 6191576ea6578c26ce2cdbc1</p>'
    
    +'<hr/>'

    +'<h2>/campus/create</h2>'
    + '<p>Adds one single campus to the database using .create({data})</p>'
    + '<p>Uses req.body, which means an object is passed</p>'
    + '<p>/api/campus/add adds the campus to the database</p>'
    + '<p>Since we can\'t pass a body in our browser, this path only works when called via code/postman</p>'
    
    +'<hr/>'
    
    +'<h2>/campus/update/:id</h2>'
    + '<p>Updates one single campus in the database using .findByIdAndUpdate(objectId, { $set: <data> })</p>'
    + '<p>Uses req.params.id, which means the id is passed in the url</p>'
    + '<p>Also uses req.body, which means an object is passed</p>'
    + '<p>/campus/update/6191576ea6578c26ce2cdbc1 updates the campus with 6191576ea6578c26ce2cdbc1 with the data passed in req.body</p>' 
    + '<p>Since we can\'t pass a body in our browser, this path only works when called via code/postman</p>'
    
    +'<hr/>'

    +'<h2>/campus/delete/:id</h2>'
    + '<p>Deletes one single campus from the database using .findByIdAndDelete(objectId)</p>'
    + '<p>Uses req.params.id, which means the id is passed in the url</p>'
    + '<p>/campus/delete/6191576ea6578c26ce2cdbc1 deletes the campus with id 6191576ea6578c26ce2cdbc1 from the database</p>'
    + '<p><strong>Please only delete campus you added</strong></p>'
    
    +'<hr/>'
  );
});

/**
 * Return all campuses
 */
router.get('/campus', async (req, res) => {
  console.log('/campus route called');
  try {
    res.json(await Campus.find());
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * Returns one single campus in the database using .findById(objectId)
 * Uses req.params.id, which means the id is passed in the url
 * /campus/6191576ea6578c26ce2cdbc1 returns the campus with id 6191576ea6578c26ce2cdbc1
 */
 router.get('/campus/:id', async (req, res) => {
  console.log('/campus/:id route called');
  try {
    res.send(await Campus.findById(req.params.id));
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * Adds one single campus to the database using .create({data})
 * Uses req.body, which means an object is passed
 * /campus/create is the appropriate route
 */
 router.post('/campus/create', async (req, res) => {
  console.log('/campus/create route called');
  try {
    res.send(await Campus.create(req.body));
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * Updates one single campus in the database using .findByIdAndUpdate(objectId, { $set: data })
 * Uses req.params.id, which means the id is passed in the url
 * Also uses req.body, which means an object is passed
 * 
 * /campus/update/6191576ea6578c26ce2cdbc1 updates the campus with id 6191576ea6578c26ce2cdbc1
 * with the data passed in req.body
 */
 router.put('/campus/update/:id', async (req, res) => {
  console.log('/campus/update/:id route called');
  try {
    res.send(await Campus.findByIdAndUpdate(req.params.id, { $set: req.body }));
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

/**
 * Deletes one single campus from the database using .findByIdAndDelete(objectId)
 * Uses req.params.id, which means the id is passed in the url
 * 
 * /campus/delete/6191576ea6578c26ce2cdbc1 deletes the campus
 * with id 6191576ea6578c26ce2cdbc1 from the database
 */
 router.delete('/campus/delete/:id', async (req, res) => {
  console.log('/campus/delete/:id route called');
  try {
    res.send(await Campus.findByIdAndDelete(req.params.id));
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;