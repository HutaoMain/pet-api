const nodemailer = require("nodemailer");
const router = require("express").Router();

router.post("/send", async (req, res) => {
  let { recipients } = req.body;
  let { emailBody } = req.body;
  let { subject } = req.body;

  try {
    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      service: "Gmail",
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: recipients.join(","),
      subject: subject,
      html: `<div className="email" style="
      border: 1px solid  black; 
      padding: 20px; 
      font-family: sans-serif; 
      line-height: 2;
      font-size: 20px;">
      
      <h2>Hi, </h2> \n
      <h5>${emailBody}</h5>
  
      <p>Regards, \n Pet Shop</p>
      </div>`,
    };

    await transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    res.status(201).json({ status: 401, error });
  }
});

module.exports = router;
