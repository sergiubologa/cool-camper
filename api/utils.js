const moment = require("moment");
const nodemailer = require("nodemailer");

module.exports.isEmailValid = email => {
  // source: https://emailregex.com/
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

module.exports.isPhoneValid = phone => {
  // Valid formats:
  // XXXX-XXX-XXX
  // XXXX.XXX.XXX
  // XXXX XXX XXX
  // XXXXXXXXXX
  const regex = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  return regex.test(phone);
};

module.exports.isFirstNameValid = firstName =>
  firstName && firstName.length > 1;
module.exports.isLastNameValid = lastName => lastName && lastName.length > 1;

// TODO - implement function
module.exports.formatPhoneForDisplay = phone => phone;

module.exports.getNoOfDays = (startDate, endDate) =>
  startDate && endDate ? moment(endDate).diff(moment(startDate), "days") : 0;

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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
