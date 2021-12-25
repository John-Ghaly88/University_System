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

//DB connection
async function main() {
    var uri = "mongodb://admin:swsec@cluster0-shard-00-00.1zdiw.mongodb.net:27017,cluster0-shard-00-01.1zdiw.mongodb.net:27017,cluster0-shard-00-02.1zdiw.mongodb.net:27017/swsec?ssl=true&replicaSet=atlas-slll6s-shard-0&authSource=admin&retryWrites=true&w=majority"
    await mongoose
      .connect(process.env.MONGODB_URI || uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((config) => {
        console.log("connected to DB successfully");
      });
  }
  main().catch(console.error);

app.use('/api/users', users);
app.use('/api/grades', grades);
app.use('/api/applicants', applicants);
app.use('/api/schedules', schedules);
app.use('/api/tutGroups', tutGroups);
app.use('/api/courses', courses);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
