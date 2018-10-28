const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://blaing:i57400GsKill16%40@ds243963.mlab.com:43963/todoapp');

module.exports = {mongoose};
