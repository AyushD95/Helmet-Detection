const express=require("express");

const router=express.Router();

router.get("/",async(req,res)=>{
res.render("login")
    
})

router.get("/signup",async(req,res)=>{
    res.render("signup")
        
    })


module.exports= router;