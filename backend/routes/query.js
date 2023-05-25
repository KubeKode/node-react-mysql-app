const {getAllQueries,postQueryController} = require("../controllers/query.controller")
const router = require("express").Router();
router.get("/queries",getAllQueries);
router.post("/query",postQueryController)
module.exports = router;