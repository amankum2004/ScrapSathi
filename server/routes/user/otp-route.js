const express = require('express');
const otpController = require('../../controller/user/otp-controller');
const { verifyOTP} = require("../../utils/mail");
const router = express.Router();

router.post('/user-otp',otpController.userOTP);
router.post('/verify-otp',verifyOTP);
router.post('/send-otp', otpController.sendOTP);

module.exports = router;
