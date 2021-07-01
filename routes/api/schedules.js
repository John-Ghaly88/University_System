const express = require("express");
const router = express.Router();

//Schedule Model
const Schedule = require("../../models/Schedule");

router.get("/:id", (req, res) => {
  const schedules = Schedule.find({ _id: req.params.id });
  res.json(schedules);
});

router.get("/", (req, res) => {
  Schedule.find()
    .sort({ Number: -1 })
    .then((schedules) => res.json(schedules));
});

router.post("/", (req, res) => {
  const newSchedule = new Schedule({
    _id: req.body._id,
    sat1: req.body.sat1,
    sat2: req.body.sat2,
    sat3: req.body.sat3,
    sat4: req.body.sat4,
    sat5: req.body.sat5,

    sun1: req.body.sun1,
    sun2: req.body.sun2,
    sun3: req.body.sun3,
    sun4: req.body.sun4,
    sun5: req.body.sun5,

    mon1: req.body.mon1,
    mon2: req.body.mon2,
    mon3: req.body.mon3,
    mon4: req.body.mon4,
    mon5: req.body.mon5,

    tue1: req.body.tue1,
    tue2: req.body.tue2,
    tue3: req.body.tue3,
    tue4: req.body.tue4,
    tue5: req.body.tue5,

    wed1: req.body.wed1,
    wed2: req.body.wed2,
    wed3: req.body.wed3,
    wed4: req.body.wed4,
    wed5: req.body.wed5,

    thu1: req.body.thu1,
    thu2: req.body.thu2,
    thu3: req.body.thu3,
    thu4: req.body.thu4,
    thu5: req.body.thu5,
  });
  newSchedule.save().then((schedule) => res.json(schedule));
});
router.delete("/:id", (req, res) => {
  Schedule.findById(req.params.id)
    .then((schedule) =>
      schedule.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});
router.put("/:id", (req, res) => {
  Schedule.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      Schedule.findOne({ _id: req.params.id }).then(function (schedule) {
        res.send(schedule);
      });
    }
  );
});

module.exports = router;
