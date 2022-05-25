const router = require("express").Router();
const offerCtrl = require("../controllers/offerCTRL");

router.post("/create", offerCtrl.Create);


module.exports = router;