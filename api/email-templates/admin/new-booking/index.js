const fs = require("fs");
const path = require("path");
const templatePath = path.join(__dirname, "template.html");

module.exports = props => ({
  to: "rezervari@coolcamper.ro, sergiu@coolcamper.ro, bianca@coolcamper.ro",
  from: `"CoolCamper 👻" <no-reply@coolcamper.ro>`,
  subject: `Yey!!! Rezervare noua! 🎊`,
  body: fs
    .readFileSync(templatePath)
    .toString()
    .replace("${startDate}", props.startDate)
    .replace("${endDate}", props.endDate)
    .replace("${noOfDays}", props.noOfDays)
    .replace("${firstName}", props.firstName)
    .replace("${lastName}", props.lastName)
    .replace("${email}", props.email)
    .replace("${phone}", props.phone)
});
