//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://chris:chrismal2019%40@cluster0-wczdf.mongodb.net/teepzy?retryWrites=true&w=majority';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;