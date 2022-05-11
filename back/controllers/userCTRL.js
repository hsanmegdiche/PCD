const jwt = require("jsonwebtoken");
const Student = require("../models/Student");
const Recruiter = require("../models/recruiter");

const bcrypt = require("bcrypt");
const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, lastname, email, password, role } = req.body;

      const user = await Recruiter.findOne({ email });
      const us = await Student.findOne({ email });
      if (user || us)
        return res.status(400).json({ msg: "The email already exists." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at least 6 characters long." });

      // Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      if (role === "Student") {
        const newUser = new Student({
          name,
          lastname,
          email,
          password: passwordHash,
        });
        await newUser.save();
      } else if (role === "Recruiter") {
        const newUser = new Recruiter({
          name,
          lastname,
          email,
          password: passwordHash,
        });
        await newUser.save();
      }

      // Save mongodb
      return res.json({ msg: "mriguel" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await Student.findOne({ email });
      const us = await Recruiter.findOne({ email });

      if (!user && !us)
        return res.status(400).json({ msg: "User does not exist." });
      if (us) {
        const isMatch = await bcrypt.compare(password, us.password);
      } else if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
      } else return res.status(400).json({ msg: "Incorrect password." });

      // If login success , create access token and refresh token
      if (user) {
        const accesstoken = createAccessToken({ id: user._id });
        const refreshtoken = createRefreshToken({ id: user._id });
        res.cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        res.json({ status: "OK", user: accesstoken });
      } else if (us) {
        const accesstoken = createAccessToken({ id: us._id });
        const refreshtoken = createRefreshToken({ id: us._id });
        res.cookie("refreshtoken", refreshtoken, {
          httpOnly: true,
          path: "/user/refresh_token",
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
        });
        res.json({ status: "OK", user: accesstoken });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Student.findById(req.user.id).select("-password");
      const us = await Recruiter.findById(req.user.id).select("-password");
      if (user) res.json(user);
      else if (us) res.json(us);
      else return res.status(400).json({ msg: "User does not exist." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  update: async (req, res) => {
    const { github,phone, id } = req.body;
   
        await Student.findById(id)
          .then((user) => {
            // Third - Verifies the user is not an admin
              user.github = github;
              user.phone=phone
              user.save((err) => {
                //Monogodb error checker
                if (err) {
                  res
                    .status("400")
                    .json({ message: "An error occurred", error: err.message });
                  process.exit(1);
                }
                res.status("201").json({ message: "Update successful", user });
              });
             
          })
          .catch((error) => {
            res
              .status(400)
              .json({ message: "An error occurred", error: error.message });
          });
        }
};
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "11m",
  });
};
const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};



module.exports = userCtrl;
