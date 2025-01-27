import mongoose, { Schema } from "mongoose";

const UserModel = new Schema({
    firstName:{
        type: String,
        required: [true, 'First name is required']
    },
    lastName:{
        type: String,
        required: [true, 'last name is required'],
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [12, 'Password cannot exceed 12 characters'],
    }

},
    { timestamps: true }
)

export const User = mongoose.model('User', UserModel);