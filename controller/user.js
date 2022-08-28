import { request, response } from "express";
import user from "../models/user-schema.js";
import bcrypt from 'bcrypt'

export const getUsers=async(request,response)=>{
    try{
        const users = await user.find();
        response.status(200).json(users);
    }

    catch(error){

        response.status(404).json({ message: error.message })
    }
}


export const addUsers=async(request,response)=>{

    const username=request.body.username ;
    const User = await user.findOne({username});

     if(User)
     response.status(409).json({ message: "please try with different username"}); 

    const salt=await bcrypt.genSalt(10) ;
    const hashedPassword=await bcrypt.hash(request.body.password,salt) ;

    const newUser = new user({...User, password:hashedPassword});
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
    
}

export const LoginUsers=async(request,response)=>{

  //    const valid=await bcrypt.compare(password,a[0].password) ;
    try{
        const username = request.body.name;
        const password=request.body.password ;

        const User= await user.findOne({name:username}) ;
        console.log(User)
        if(!User)
        response.status(500).json({ message: "wrong username!!Please use correct username"});
        const {password: userPassword}=User ; 
        const valid=await bcrypt.compare(password,userPassword) ;
        
        if(!valid)
        response.status(201).json("wrong password!!Please use correct password");

        response.status(201).json("login successfully!!!");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
    
}