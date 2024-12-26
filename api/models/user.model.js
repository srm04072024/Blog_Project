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
        "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1735142241~exp=1735145841~hmac=b1b61a886dfeccca50628f8c4133c470fff54e877d263eda9a4e492a1dcfdc56&w=740",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
