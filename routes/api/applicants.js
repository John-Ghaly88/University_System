const express = require('express');
const applicants = require('../../models/Applicants');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (req, res) => {
 const { user_email, user_password } = req.body;
 const newApplicant = new applicants({
	first_name: req.body.first_name,
	last_name: req.body.last_name,
	user_email: req.body.user_email,
	user_password: req.body.user_password,
	birth_year: req.body.birth_year,
	national_id: req.body.national_id,
	country: req.body.country,
	state: req.body.state,
	city: req.body.city,
	phone_number: req.body.phone_number,
	high_school_name: req.body.high_school_name,
    })
    newApplicant.save().then(applicants => res.json(applicants));
});

module.exports = router;