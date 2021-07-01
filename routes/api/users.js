const { json } = require("express");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UsersSchema = require("../../models/Users");

//get user
router.get("/", (req, res) => {
  Users.find()
    .sort({ id: 1 })
    .then((users) => res.json(users));
});

//create user
router.post("/", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 10);
  const newUsers = new Users({
    email: req.body.email,
    id: req.body.id,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
  });
  newUsers.save().then((users) => res.json(users));
});

//cahange password
//email from the token
router.put("/changepwd", (req, res, next) => {
  const jwttokenHeader = req.headers["authorization"];
  const jwttoken = jwttokenHeader && jwttokenHeader.split(" ")[1];
  //console.log(jwttoken);
  jwt.verify(jwttoken, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    UsersSchema.findOne({
      email: user.email,
    })
      .then((user) => {
        if (!user) {
          return res.status(401).json({
            message: "Email not found",
          });
        }
        getUser = user;
        //console.log(user.password);
        return bcrypt.compare(req.body.ogPassword, user.password);
      })
      .then((response) => {
        if (!response) {
          return res.status(401).json({
            message: "password incorrect",
          });
        }
        const newPasswordHash = bcrypt.hashSync(req.body.newPassword, 10);
        //const res = UsersSchema.updateOne({email: getUser.email}, {password:newPasswordHash})
        UsersSchema.updateOne(
          { email: getUser.email },
          { $set: { password: newPasswordHash } }
        )
          .then(() => {
            res.status(200).json({
              message: "password changed",
            });
          })
          .catch((err) => {
            if (err) {
              return res.sendStatus(403);
            }
          });
      });
  });
});

//delte user
router.delete("/:id", (req, res) => {
  UsersSchema.findById(req.params.id)
    .then((UsersSchema) =>
      UsersSchema.remove().then(() => res.json({ success: true }))
    )
    .catch((err) => res.status(404).json({ success: false }));
});

//Log in
router.post("/login", (req, res, next) => {
  let getUser;
  UsersSchema.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Email not found",
        });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) => {
      if (!response) {
        return res.status(401).json({
          message: "password incorrect",
        });
      }
      let jwtToken = jwt.sign(
        {
          email: getUser.email,
          role: getUser.role,
          firstName: getUser.firstName,
          lastName: getUser.lastName,
        },
        "secret",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        token: "Bearer " + jwtToken,
        expiresIN: 3600,
        msg: getUser,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "failed to create token",
      });
    });
});

module.exports = router;
