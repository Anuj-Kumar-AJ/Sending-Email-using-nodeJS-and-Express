// importing express 
express = require('express');
//importing nodemailer
nodemailer = require('nodemailer');

// creating an instance of express
app = express();

port = process.env.port || 3000;


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: //"User_ID", 
      pass: //"User_Password", 
    },
  });

// send mail with defined transport object
const message = await transporter.sendMail({
    from: '"Anuj " <Anujkumar.sk639@gmail.com>', // sender address
    to: "user, <anujkumaraj639@gmail.com>", // list of receivers
    subject: "Email from nodeJS server", // Subject line
    text: "Hi from nodeJS server", // plain text body
    html: "<b>Hi from nodeJS server</b>", // html body
  });

console.log("Message sent: %s", message.messageId);
  
 