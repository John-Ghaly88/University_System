const express = require("express");
const router = express.Router();

//Course Model
const Course = require("../../models/Course");

// @router  GET api/courses
// @desc    Get All Course
// @acess   Public
router.get("/", (req, res) => {
  Course.find()
    .sort({ Number: -1 })
    .then((courses) => res.json(courses));
});

router.get("/:id", (req, res) => {
  Course.findById(req.params.id).then((courses) => res.json(courses));
});
router.get("/:major/:semester", async (req, res) => {
  const semNo = req.params.semester;
  const major = req.params.major;
  const allcourses = await Course.find({ semester: semNo, major: major });
  res.status(200).json(allcourses);
});

// @router  POST api/courses
// @desc    Create A Course
// @acess   Public
router.post("/", (req, res) => {
  const newCourse = new Course({
    _id: req.body._id,
    name: req.body.name,
    major: req.body.major,
    semester: req.body.semester,
    hours: req.body.hours,
    hasPrerequisite: req.body.hasPrerequisite,
  });
  newCourse.save().then((course) => res.json(course));
});

// @router  DELETE api/courses
// @desc    Delete A Course
// @acess   Public
router.delete("/:id", (req, res) => {
  Course.findById(req.params.id)
    .then((course) => course.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

// @router  PUT api/courses
// @desc    Delete A Course
// @acess   Public
router.put("/:id", (req, res) => {
  Course.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Course.findOne({ _id: req.params.id }).then(function (course) {
      res.send(course);
    });
  });
});
module.exports = router;
