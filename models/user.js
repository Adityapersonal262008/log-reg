const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
username: String,
password: String
}, { collection: 'users' });

userSchema.pre('save', function(next) {
const user = this;
bcrypt.hash(user.password, 10, function(err, hash) {
if (err) {
return next(err);
}
user.password = hash;
next();
});
});

const User = mongoose.model('User', userSchema);

module.exports = User;