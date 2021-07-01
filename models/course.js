const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CourseSchema = new Schema({
    _id:Number 
    ,
    name: {
        type: String,
        required: true
    },

    major: {
        type:String,
        required:true

    },

    semester: {
        type:Number,
        required:true
    },

    hours: {
        type:Number,
        min:0,
        required: true

    },

    hasPrerequisite: {
        type: Boolean,
        default:false
    }
    

});

module.exports = Course = mongoose.model('course',CourseSchema);