const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const users = require('./routes/api/users');
const grades = require('./routes/api/grades');
const applicants = require('./routes/api/applicants');
const schedules = require('./routes/api/schedules');
const tutGroups = require('./routes/api/tutGroups');
const courses = require('./routes/api/courses');


const app =express();
app.use(cors());
app.use(express.json());

const auth = require('./routes/api/users');
app.use('./routes/api/auth', auth)

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(()=> console.log("mongoDB connected"))
    .catch(err => console.log(err));


app.use('/api/users', users);
app.use('/api/grades', grades);
app.use('/api/applicants', applicants);
app.use('/api/schedules', schedules);
app.use('/api/tutGroups', tutGroups);
app.use('/api/courses', courses);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
