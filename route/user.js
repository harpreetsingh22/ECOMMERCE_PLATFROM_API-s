import  express from "express";
import { addUsers, LoginUsers } from "../controller/user.js";
const userRoute=express.Router()    ;

userRoute.post('/api/auth/register', addUsers);

userRoute.post('/api/auth/login', LoginUsers)


export default userRoute ;