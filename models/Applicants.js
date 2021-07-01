const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
    },
    user_password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    birth_year: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 4, 
      minlength: 4
    },
    national_id: {
        type: Number, 
        required: true, 
        trim: true, 
        maxlength: 14, 
        minlength: 14
    },
    country: {
        type: String,
        required: true,
        trim: true
      },
    state: {
      type: String,
      trim: true
    },
    city: {
      type: String,
      trim: true
    },
    phone_number: {
        type: String, 
        trim: true, 
        maxlength: 11, 
        minLength: 11, 
    },
    faculty: {
        type: String,
        trim: true
    },
    major: {
        type: String, 
        trim: true
    },
    high_school_name: {
        type: String, 
        trim: true
    },
    certificate: {
        type: String, 
        trim: true
    }
  },
  {
    coleection: 'applicants',
  }
);


const Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;