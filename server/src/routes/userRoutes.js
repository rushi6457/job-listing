const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const argon = require("argon2")
const UserModel =require("../models/userModel")

const Signup = async(req,res) =>{

       const {name,email,password}= req.body;
       
        const hash = await argon.hash(password)
        const userExists = await UserModel.findOne({email:email})
      
        try {
              if(userExists){
            res.send({"message" : "User already exists please login to proceed", status:false})
        }
        else{
          if(email.includes("@masaischool.com")){
            const newUser = new UserModel({
            name,
            email,
            password:hash,
            role:"admin"
        })

        await newUser.save()
        res.send({"message":"Admin created successfully",email:newUser.email,name:newUser.name,role:newUser.role,created:newUser.createdAt,updated:newUser.updatedAt}).status(201)
          }
          else{
              const newUser = new UserModel({
            name,
            email,
            password:hash,
            role:"user"
        })

        await newUser.save()
        res.send({"message":"User created successfully",email:newUser.email,name:newUser.name,role:newUser.role,created:newUser.createdAt,updated:newUser.updatedAt}).status(201)
          }
    }
        } catch (error) {
            res.send(error,{status:false})
        }
}
const findUser = async (data) => {
  let user = await UserModel.findOne({ ...data });
  if (user) {
    return user;
  } else {
    return false;
  }
};

const validateUser = async (data) => {
  let { email, password } = data;
  try {
    let user = await findUser({ email });
    
    if (user) {
      if (await argon.verify(user.password, password)) {
        return user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
const Login = async (req, res) => {
  let { email, password } = req.body;
  let user = await validateUser({ email, password });
    
      if(user && email.includes("@masaischool.com")){
         if (user ) {
    let token = jwt.sign(
      { email: user.email, name: user.name,role:user.role},
      process.env.SECRET_KEY,
      {
        expiresIn: "2 days",
      }
    );

    let refreshToken = jwt.sign(
      { email: user.email, name: user.name},
        process.env.REFRESH_KEY,
      { expiresIn: "7 days" }
    );
     res.status(200).send({ "Message": "Admin Login successfull" , token, refreshToken,role:"Admin",status:true });
  } else {
    return res.send({ status: false, messege: "something went wrong",status:false });
  }
      }
      else{

           if (user  ) {
    let token = jwt.sign(
      { email: user.email, name: user.name,role:user.role},
      process.env.SECRET_KEY,
      {
        expiresIn: "2 days",
      }
    );

    let refreshToken = jwt.sign(
      { email: user.email, name: user.name},
        process.env.REFRESH_KEY,
      { expiresIn: "7 days" }
    );
     res.status(200).send({ "Message": "Login successfull" , token, refreshToken ,role:"User",status:tmongoose.rusted });
  } else {
    return res.send({ status: false, messege: "something went wrong" });
  }

      }
};

const getProfile = async(req,res) =>{
  
  try {
    
      let users = await UserModel.find()
     
        res.send(users)
    
  } catch (error) {
    res.send({"message":"Something went wrong"})
  }
}

const getAdmin = async(req,res) =>{

      let users = await UserModel.find()
      console.log(users);

}

module.exports = {
    Signup,
    Login,
    getProfile,
    getAdmin
}
