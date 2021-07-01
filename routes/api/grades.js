const { json } = require('express');
const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const gradeSchema = require('../../models/Grades');
const UsersSchema = require('../../models/Users');

//student get
router.get('/student', (req, res) => {
    const jwttokenHeader = req.headers['authorization'];
    const jwttoken = jwttokenHeader && jwttokenHeader.split(' ')[1];
    jwt.verify(jwttoken, 'secret', (err, user) =>{
        if (err)return res.sendStatus(403)
        UsersSchema
        .findOne({
            email: user.email,
    })
    .then((user)=>{
        Grades.find({ studentID: user.id })
        .sort({ id: 1 })
        .then(grades => res.json(grades))
    })
    .catch((err)=>{
        return res.status(401).json({
            message: "unauthourized",
        });

    })

    })
    
});

//ta get groups
router.get('/ta/groups', (req, res) => {
    const jwttokenHeader = req.headers['authorization'];
    const jwttoken = jwttokenHeader && jwttokenHeader.split(' ')[1];
    jwt.verify(jwttoken, 'secret', (err, user) =>{
        console.log(err)
        if (err)return res.sendStatus(403)
        UsersSchema
        .findOne({
            email: user.email,
    })
    .then((user)=>{
        gradeSchema.find({ instructerID: user.id }, 'group')
        .distinct('group')
        .then(grades => res.json(grades))

    })
    .catch((err)=>{
        return res.status(401).json({
            message: "unauthourized",
        });

    })
    })
})

//ta get group grades
router.get('/ta/:group', (req, res) => {
    const jwttokenHeader = req.headers['authorization'];
    const jwttoken = jwttokenHeader && jwttokenHeader.split(' ')[1];
    jwt.verify(jwttoken, 'secret', (err, user) =>{
        if (err)return res.sendStatus(403)
        UsersSchema
        .findOne({
            email: user.email,
    })
    .then((user)=>{
        Grades.find({ instructerID: user.id, group: req.params.group })
        .sort({ id: 1 })
        .then(grades => res.json(grades))
    })
    .catch((err)=>{
        return res.status(401).json({
            message: "unauthourized",
        });
    })
    })
})

//delte record
router.delete('/:id', (req, res) => {
    gradeSchema.findById(req.params.id)
        .then(gradeSchema => gradeSchema.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

//create record
router.post('/', (req, res) => {
    const newGrades = new Grades({
        studentID: req.body.studentId,
        instructerID: req.body.instructerId,
        courseID: req.body.courseId,
        grade: req.body.grade,
        group: req.body.group
    })
    newGrades.save().then(grades => res.json(grades));
});

//admin change grade
router.put('/changegrade', (req, res, next) => {
    const jwttokenHeader = req.headers['authorization'];
    const jwttoken = jwttokenHeader && jwttokenHeader.split(' ')[1];
    jwt.verify(jwttoken, 'secret', (err, user) => {
        if (err)return res.sendStatus(403)
        UsersSchema
        .findOne({
            email: user.email,
    }).then((user) => { 
                if (!user) {  
                    return res.status(401).json({
                        message: "unauthourized",
                    });
                }
                getUser = user;
                if (user.role == "admin") {
                    gradeSchema.updateOne(
                        {
                            studentID: req.body.studentID,
                            courseID: req.body.courseID
                        },
                        { $set: { "grade": req.body.grade } }
                    ).then(() => {
                        return res.status(200).json({
                            message:"grades posted"
                        })
                    })
                    .catch((err)=>{
                        return res.status(401).json({
                            message: "unauthourized",
                        });
                    })    
                }
            })
    })
})
module.exports = router;
