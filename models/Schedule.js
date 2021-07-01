const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//Create Schedule Schema
const ScheduleSchema = new Schema({
    _id:Number ,
    sat1: {
        type:String,
        required:true
    },

    sat2: {
        type:String,
        required:true
    },

    sat3: {
        type:String,
        required:true
    },

    sat4: {
        type:String,
        required:true
    },

    sat5: {
        type:String,
        required:true
    },

    sun1: {
        type:String,
        required:true
    },

    sun2: {
        type:String,
        required:true
    },

    sun3: {
        type:String,
        required:true
    },

    sun4: {
        type:String,
        required:true
    },

    sun5: {
        type:String,
        required:true
    },


    mon1: {
        type:String,
        required:true
    },

    mon2: {
        type:String,
        required:true
    },

    mon3: {
        type:String,
        required:true
    },

    mon4: {
        type:String,
        required:true
    },

    mon5: {
        type:String,
        required:true
    },

    tue1: {
        type:String,
        required:true

    },

    tue2: {
        type:String,
        required:true

    },

    tue3: {
        type:String,
        required:true

    },

    tue4: {
        type:String,
        required:true

    },

    tue5: {
        type:String,
        required:true

    },


    wed1: {
        type:String,
        required:true
    },

    wed2: {
        type:String,
        required:true
    },

    wed3: {
        type:String,
        required:true
    },

    wed4: {
        type:String,
        required:true
    },

    wed5: {
        type:String,
        required:true
    },


    thu1: {
        type:String,
        required:true

    },

    thu2: {
        type:String,
        required:true

    },

    thu3: {
        type:String,
        required:true

    },

    thu4: {
        type:String,
        required:true

    },

    thu5: {
        type:String,
        required:true

    }


});

module.exports = Schedule = mongoose.model('schedule',ScheduleSchema);