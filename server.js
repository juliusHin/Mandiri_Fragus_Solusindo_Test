const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

/* 
use User routes
*/
const userRoutes = require('./user.routes');

// using as middleware
app.use('/api/user', userRoutes);


const postRoutes = require('./post.routes');
// using as middleware
app.use('/api/posts', postRoutes);


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});