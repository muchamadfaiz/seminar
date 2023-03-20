import {UserModel} from "../models/user.model.js"

const deleteUser = async (req,res) => {
    const user = await UserModel.findById(req.userID);
    console.log(JSON.stringify(user._id) != JSON.stringify(req.userID))
    // console.log(req.userID)
    if(JSON.stringify(req.userID) != JSON.stringify(user._id)){
        return res.status(403).send("You can delete only your account!")
    }
    await UserModel.findByIdAndDelete(req.params.id)
    res.status(200).send("deleted")
    };
export {deleteUser}