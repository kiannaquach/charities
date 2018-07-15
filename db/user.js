const mongoose = require('mongoose');

mongoose.connect('mongodb://user:password1@ds129821.mlab.com:29821/charities', function(err, res) {
  if (err) {
    console.log('mongo not connected');
  } else {
    console.log('mongo connected');
  }
});

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String, 
    default: ''
  }, 
  email: {
    type: String,
    default: ''
  }, 
  password: {
    type: String,
    default: ''
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bycrpt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
