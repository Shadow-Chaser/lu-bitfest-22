const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, "Minimum Length of the email must be 5"],
        maxLength: 255,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [4, "Minimum Length of the email must be 4"],
        maxLength: 10,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ["admin", "consumer"],
        required: true,
    },
    consumerID: {
        type: Number,
    },
    phone: {
        type: String,
    },
    consumerRole: {
        type: String,
        enum: ["student", "teacher", "staff"],
    },
    pickupStoppage: {
        type: String,
    },
    route: {
        type: "String",
    },
    department: {
        type: String,
        enum: ["CSE", "EEE", "Civil", "Architecture", "BBA", "English", "Law"],
    },
    codeName: {
        type: String,
    },
    designation: { type: String },
});

userSchema.methods.generateJWTToken = function () {
    const token = jwt.sign(
        { _id: this._id, email: this.email, role: this.role, fullName: this.fullName },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "7d",
        },
    );

    return token;
};

module.exports = model("User", userSchema);
