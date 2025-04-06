const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        otp: { type: String }, // Stores OTP for verification
        otpVerified: { type: Boolean, default: false },
        termsAccepted: { type: Boolean, required: true },
        userType: {
            type: String,
            default: "individual",
            enum: ["individual", "waste-collector", "big-organization", "recycle-company"],
            required: true,
        },
        address: { type: String },
        profilePhoto:{ type: String},
        companyName: { type: String },
        businessLicenseNo: { type: String },
        wasteType: { type: String }, // Only for "big-organization"
        recyclingCapabilities: { type: String }, // Only for "recycle-company"
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;



