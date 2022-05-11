const router = require("express").Router();
const userCtrl = require("../controllers/userCTRL");
const auth = require("../middleware/auth");

router.post("/signup", userCtrl.register);

router.post("/login", userCtrl.login);
router.post("/update", userCtrl.update);


router.get("/logout", auth, userCtrl.logout);
router.get("/refresh_token", userCtrl.refreshToken);

router.get("/getuser", auth, userCtrl.getUser);

module.exports = router;
