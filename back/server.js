require("dotenv").config();
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

const mongoose = require("mongoose");
const PORT = 5000;

const cors = require("cors");

const cookieParser = require("cookie-parser");

const URI = process.env.MONGODB_url;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cookieParser());
<<<<<<< HEAD
app.use("/user", require("./routes/user"));
app.use("/api", require("./routes/upload"));
app.use("/recruiter", require("./routes/recruiter"));

=======
app.use("/user", require("./routes/auth"));
app.use("/api", require("./routes/upload"));
>>>>>>> 515ada2b4e0e27a6c7d7af157568f3251ddc532c

app.listen(PORT, () => {
  console.log("serveur is running on port ", PORT);
});
