const express = require("express");
const { registerUser, getAllUser } = require("../controller/userController");
const router = express.Router();

router.route("/").get(getAllUser).post(registerUser);

module.exports = router;
// export default router;
// export { router as userRouter };
