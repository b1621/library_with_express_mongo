const express = require("express");
const {
  registerUser,
  getAllUser,
  logoutUser,
  authUser,
  getUserProfile,
  updateUserProfile,
} = require("../controller/userController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.route("/").get(getAllUser);
router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .patch(protect, updateUserProfile);

module.exports = router;
// export default router;
// export { router as userRouter };

// 0712139242428
