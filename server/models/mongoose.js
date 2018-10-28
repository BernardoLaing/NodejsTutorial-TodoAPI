const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://blaing:i57400GsKill16%40@ds129821.mlab.com:29821/todoapp');

module.exports = {mongoose};
