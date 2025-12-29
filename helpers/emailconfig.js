const nodemailer = require("nodemailer");


async function nodemailerFn(email){
    const transporter = nodemailer.createTransport({
  host: "gmail",
  port: 587,
  secure: false,
  auth: {
    user: "pallabmridha409@gmail.com",
    pass: "ibhfbdwsseumdrjv",
  },
});
 const info = await transporter.sendMail({
      from: '"pollob" <pallabmridha409@gmail.com>',
      to: email, 
      subject: "Hello",
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });
}

module.exports = nodemailerFn;


