import {UserModel} from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await UserModel.findOne({ username })
        const hashedPassword = bcrypt.hashSync(password, 10)

        if (user) {
            return res.json({ message: 'user already exist' })
        }
        const newUser = new UserModel({
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
        const user = await UserModel.findOne({ username });
        if (!user) return res.status(404).send('User not found');

        // check password
        const isCorrect = bcrypt.compareSync(password, user.password);
        if (!isCorrect) return res.status(400).send('Wrong pasword or username!!');

        // if everything OK
        const token = jwt.sign({id: user._id}, process.env.JWT_KEY)
        res.cookie("accessToken", token).status(200).send("cookies berhasil dibuat")

    } catch (err) {
        res.status(500).send("Something went wrong login");
    }

    //TO DO 
}
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        sameSite:"none",
        secure: true,
    }).status(200).send("User has been logout")
}