import { User } from '../models/user.model.js'
import mongoose from 'mongoose'

const createUser = async (req, res) => {
    console.log(req.body)
    const { firstName, lastName, username, email, password } = req.body

    try {
        const user = await User.create({firstName: firstName,
                                                lastName: lastName,
                                                username: username.toLowerCase(),
                                                email: email,
                                                password: password})

        const createdUser = User.findById(user._id).select('-password');

        res.status(201)
            .send(`user created: ${createdUser}`);
    }
    catch (error) {res.status(400)
        .send(`user created with error: ${error}`);
        console.log(`user creation failed: ${error}`);
    }
}

export { createUser }