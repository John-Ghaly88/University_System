const express = require('express');
const SlistData = require("../../models/TutGroups");
const router = express.Router();

router.get('/:groupNo', async (req, res) => {
  try {
    const groupNo = req.params.groupNo;
    const allStudents = await SlistData.find({ TutNo: groupNo });
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const newRecord = new SlistData({
    SID: req.body.sID,
    Sname: req.body.Sname,
    TutNo: req.body.TutNo,
  });

  try {
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
