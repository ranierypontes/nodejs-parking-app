var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/parking');
var db = mongoose.connection;

db.on('open', () => {
    console.log('MongoDB is connected!');
});

db.on('error', () => {
    console.log('MongoDB error.');
});

return db;
