 const express = require ('express');
 const cors = require('cors');
 const nodemailer = require('nodemailer');
 require ('dotenv').config()


 const app = express();
 app.use(cors());
 app.use(express.json())

 const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.E_MAIL,
        pass: process.env.E_MAIL_PASS
    }
 })

 app.post('/contact',async(req,res)=>{
    const {name,surname,email,message } = req.body

    if(!name|| !email || !message){
        return res.status(400).json({error:'Missing required fields'})
    }

    try{
        await transport.sendMail({
            from:process.env.E_MAIL,
            to: process.env.E_MAIL,
            replyTo: email,
            subject:`Portfolio Contact from ${name} ${surname || ''}`,
            text:`Name:${name} ${surname || ''}\nEmail:${email}\n\nMessage:\n${message}`,
        })
        res.status(200).json({success:true})
    }catch(error){
        console.log(error)
        res.status(500).json({error:'Failed to send message'})
    }
 })
 const PORT = process.env.PORT || 5000;
 app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})


