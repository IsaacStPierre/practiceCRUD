const express = require("express");
const { request, detailedRequest, update, add, remove } = require("../controllers/postsController.js");
const router = express.Router();

router.route("/posts").get(request);
router.route("/posts/:id").get(detailedRequest);
router.route("/posts/new").post(add);
router.route("/posts/:id/edit").patch(update);
router.route("/posts/:id/edit").delete(remove);

module.exports = router