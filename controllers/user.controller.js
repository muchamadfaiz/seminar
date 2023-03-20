import {UserModel} from "../models/user.model.js"
import jwt from "jsonwebtoken"

const deleteUser = async (req,res) => {
    await UserModel.findById(req.params.id)
    const token = req.cookies.accessToken
    if (!token) return res.status(401).send("you are not authenticated")

    jwt.verify(token,process.env.JWT_KEY, async (err,payload) => {
        if(payload.id !== UserModel._id?.toString()){
            return res.status(403).send("You can delete only your account!")
        }
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send("deleted")
    })
}
export {deleteUser}