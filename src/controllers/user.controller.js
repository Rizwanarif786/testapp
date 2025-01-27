import { User } from '../models/user.schema.js'
import mongoose from 'mongoose'

const createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    try {

    }
    catch (error) {res.status(400).send({error: error}) }
}