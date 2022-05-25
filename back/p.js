const router = require("express").Router();
const spawn = require("child_process").spawn;
const py = spawn("python", ["./n.py"]);
py.stdout.on("data", (data) => {
  console.log(data.toString());
});
