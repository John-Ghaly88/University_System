const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
    studentID: {
        type: String, 
        required: true
    },
    instructerID: {
        type: String,
        required: true,
    },
    courseID: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: false
    },
    group:{
        type: String,
        required: false
    }
    
},{
    collection: 'grades',
});

module.exports = Grades = mongoose.model('Grades', GradeSchema);