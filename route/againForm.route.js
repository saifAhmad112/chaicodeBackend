const express = require("express")
const router = express.Router()
const Controller = require("../controllers/againForm.controllers")


router.post("/create", Controller.create);
router.get("/get",Controller.againGetAll)

module.exports = router;
