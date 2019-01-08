const nodemailer = require("nodemailer");

module.exports.sendEmail = async emailTemplate => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.AUTOMATION_EMAIL_ADDRESS,
      pass: process.env.AUTOMATION_EMAIL_PASSWORD
    }
  });
  // setup email data with unicode symbols
  const mailOptions = {
    from: emailTemplate.from, // sender address
    to: emailTemplate.to, // list of receivers
    subject: emailTemplate.subject, // Subject line
    text: "", // plain text body
    html: emailTemplate.body // html body
  };

  // send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    console.log(
      `Email sent successfully to "${emailTemplate.to}" with the subject "${
        emailTemplate.subject
      }"`
    );
    return true;
  } catch (error) {
    console.log(
      `Error sending email to "${emailTemplate.to}" with the subject "${
        emailTemplate.subject
      }".
      ${error}`
    );
    return false;
  }
};
