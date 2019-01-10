const fs = require("fs");
const path = require("path");
const templatePath = path.join(__dirname, "template.html");

module.exports = props => {
  const prices = getPrices(props.startDate, props.endDate);
  return {
    to: "contact@coolcamper.ro, sergiu@coolcamper.ro, bianca@coolcamper.ro",
    from: `"CoolCamper 🖐" <no-reply@coolcamper.ro>`,
    subject: `Mesaj nou`,
    body: fs
      .readFileSync(templatePath)
      .toString()
      .replace("${name}", props.name)
      .replace("${email}", props.email)
      .replace("${message}", props.message)
  };
};
