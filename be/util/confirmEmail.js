const nodemailer = require("nodemailer");

async function confirmEmail(email, username, code) {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAILER.split(' ')[2].replace('<', ''). replace('>', ''), // generated ethereal user
        pass: process.env.EMAILER_PW, // generated ethereal password
      },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.EMAILER, // sender address
    to: `${email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Hello ${username}?`, // plain text body
    html: `<b>Hello ${username}!</b><br />
    <a href="http://localhost:5173/confirm/?code=${code}&username=${username}" target="_blank">Click this link to confirm your email</a>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}

module.exports = confirmEmail