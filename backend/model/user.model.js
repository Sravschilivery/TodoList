const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);


// // Create a new user and save it to the database
// const newUser = new User({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: 'securepassword123'
// });

// newUser.save().then(() => {
//     console.log('User saved');
// }).catch(err => {
//     console.error('Error saving user:', err);
// });


