const express = require("express");
const ctrl = require("../controllers/cosmeticsCtrl");

const router = express.Router();

router.get("/peel", ctrl.getCosmetics);
router.get("/peel/:id", ctrl.getPeelById);

module.exports = router;
