const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsList = new Schema(
  {
    SID: {
      type: Number,
    },
    Sname: {
      type: String,
    },
    TutNo: {
      type: Number,
    },
  },
  { collection: "studentsList" }
);

module.exports = tutGroups = mongoose.model("tutGroups", studentsList);
