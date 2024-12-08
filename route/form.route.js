const express = require("express")
const router = express.Router()
const Controller = require("../controllers/form.controllers")


router.post("/create", Controller.create);
router.get("/get",Controller.getAll)
router.delete("/delete/:id",Controller.deleteForm)
router.patch("/patch",Controller.editForm)
router.get("/getById/:id",Controller.getFormById)

module.exports = router;
