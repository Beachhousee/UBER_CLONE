const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const authmiddleware=require("../middlewares/auth.middleware")

// Registering User
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  userController.registerUser
);

// Logging User
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password should be minimum 6 letters"),
  ],
  userController.loginUser
);

//Getting Profile
router.get('/profile',authmiddleware.authUser,userController.getUserProfile)

//Logout User
router.get('/logout',authmiddleware.authUser,userController.logoutUser)

module.exports = router;
