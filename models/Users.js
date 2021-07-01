const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    id: {
        type: Number, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
    
},{
    collection: 'users',
});

UsersSchema.plugin(uniqueValidator,{message:'Email already exists'});
module.exports = Users = mongoose.model('Useres', UsersSchema);