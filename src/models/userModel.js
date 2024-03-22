import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your full name"],
    },
    email: {
        type: String,
        required: [true, "Please provide your email address"],
        unique: true
    },
    number: {
        type: Number,
        required: [true, "Please provide your Contact number"],
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
    },
    isVerified: {
        type: Boolean,
        default: false // 'false' should be lowercase
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

// Ensure the model name is singular (User instead of users)
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
