import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://lh3.googleusercontent.com/a/ACg8ocLA0WcGnEjPmAZRiWPTk0DJ0XZTeYdNy6-XHhOFie9UNWa0aPYd=s96-c",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
