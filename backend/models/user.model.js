import mongoose  from "mongoose";

const userchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
      type: String,
      required: true
  },
  lastLogin: {
      type: Date,
      default: Date.now
  },
  isVerified: {
      type: Boolean,
      default: false
  },
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date,
}, {timestamps: true});
//createat and updateat will be automatically added into the documents
export const User = mongoose.model("User", userchema);
