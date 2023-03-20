import jwt from "jsonwebtoken"

const verifyToken = (req,res, next) => {
    const token = req.cookies.accessToken
    if (!token) return res.status(401).send("you are not authenticated")

    jwt.verify(token,process.env.JWT_KEY, async (err,payload) => {
        if (err) return res.status(403).send('Token is not valid')
        req.userID = payload.id;
        next()
    });
};

export {verifyToken}