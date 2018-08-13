const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/carDatabase', {useMongoClient: true});

mongoose.connection
  .once('open', () => console.info('Connected to the database'))
  .on('error', err => console.error(err));
