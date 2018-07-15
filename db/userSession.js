const mongoose = require('mongoose');

mongoose.connect('mongodb://user:password1@ds129821.mlab.com:29821/charities', function(err, res) {
  if (err) {
    console.log('mongo not connected');
  } else {
    console.log('mongo connected');
  }
});

const UserSessionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
    type: Date, 
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('UserSession', UserSessionSchema);
