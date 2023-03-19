import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        const hashedPassword = bcrypt.hashSync(password, 10)

        if (user) {
            return res.json({ message: 'user already exist' })
        }
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        })

        await newUser.save();
        res.status(201).send('User has been created')
    } catch (err) {
        res.status(500).send(err)
    }
}
export const login = async (req, res) => {
    try {
        // check username
        const { username, password } = req.body
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('User not found');

        // check password
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (!isCorrect) return res.status(400).send('Wrong pasword or username!!');

        // if everything OK
        const token = jwt.sign({id: user._id})
        res.status(200).send("login success")


    } catch (err) {
        res.status(500).send("Something went wrong login")
    }

    //TO DO 
}
export const logout = (req, res) => {
    //TO DO 
}