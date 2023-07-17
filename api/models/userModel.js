const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Please enter the username'],
        minLength: 4,
        unique: true
    },
    password:{
        type:String,
        required:[true, 'Please enter the password']
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
