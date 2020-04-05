const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRouter = require('./src/router/userRouter');


app.use(bodyParser.urlencoded({ extended: false, strict: true }));

app.use((err, req, res, next) => {
  if (err) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    next();
  }
});


app.use('/user', userRouter, (req, res, next) => {
  next();
});

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/appiness_database';
try {
  mongoose.connect(mongoDB, { useNewUrlParser: true });
} catch (ex) {
  console.error('Error in establishing connection', ex);
}

mongoose.connection.on('error', (err) => {
  console.error('something went wrong after establishing connection', err);
});
// Get the default connection
const db = mongoose.connection;
db.on('error', () => { console.error.bind(console, 'MongoDB connection error:'); });


// Bind connection to error event (to get notification of connection errors)


app.listen(3001);
