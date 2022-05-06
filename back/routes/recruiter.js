const router = require("express").Router();
const rCtrl = require("../controllers/rCTRL");
const userCtrl = require("../controllers/userCTRL");
const auth = require("../middleware/auth");

router.post("/signup", rCtrl.register);
router.post("/login", userCtrl.login);
router.get("/logout", auth, rCtrl.logout);
router.get("/refresh_token", rCtrl.refreshToken);

router.get("/getuser", auth, rCtrl.getUser);

module.exports = router;
