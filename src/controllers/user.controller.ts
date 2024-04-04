import {  Request, Response } from "express";
import User from "../database.ts/models/User.models";
import bcryptjs from 'bcryptjs'

class AuthController{
    public static async registerUser(req:Request,res:Response):Promise<void>{

            
        const {username,email,password,role} = req.body 
        if(!username || !email || !password){
            res.status(400).json({
                message : "Please provide username,email,password"
            })
            return
        }

       await User.create({
            username,
            email,
            password : bcryptjs.hashSync(password,12),
            role : role
        })

        res.status(200).json({
            message : "User registered successfully"
        })


    }
}
export default AuthController