const express = require("express");
const {createUser, getAllUsers, getUser, deleteUser, updateUser} = require("../controllers/user-controller");
const router = express.Router();
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser)
module.exports = router;