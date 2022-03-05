import { Document, Model, model, Schema } from "mongoose";
import validator from "express-validator";
import JWT from "jsonwebtoken";

export interface IUser extends Document {
    email: string;
    password: string;
    username: string;
    phoneNo: string;
  }

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required!"],
    validate(val: string) {
      if (!validator.body(val).isEmail) {
        throw new Error("email is not valid!");
      }
    },
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "username is required!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required!"],
    minlength: 6,
  },
  phoneNo:{
      type: String,
      required: [true, 'phone number is required!'],
      trim: true
  },
}, {
    timestamps: true
});




const User: Model<IUser> = model("User", userSchema);

export default User;