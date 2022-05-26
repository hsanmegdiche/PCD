const router = require("express").Router();
router.post("/getscore", (req, res) => {
  const spawn = require("child_process").spawn;
  const py = spawn("python", ["./n.py"]);
  py.stdout.on("data", (data) => {
    res.json(data.toString());
  });
});
module.exports = router;
