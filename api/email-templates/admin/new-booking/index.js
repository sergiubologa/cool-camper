const fs = require("fs");
const path = require("path");
const moment = require("moment");
require("moment/locale/ro");
const { getPrices } = require("coolcamper-common");
const templatePath = path.join(__dirname, "template.html");

module.exports = props => {
  const prices = getPrices(props.startDate, props.endDate);
  const startDate = moment(props.startDate).format("LL");
  const endDate = moment(props.endDate).format("LL");
  return {
    to: "rezervari@coolcamper.ro, bianca@coolcamper.ro",
    from: `"CoolCamper 👻" <no-reply@coolcamper.ro>`,
    subject: `Yey!!! Rezervare noua! 🎊`,
    body: fs
      .readFileSync(templatePath)
      .toString()
      .replace("${startDate}", startDate)
      .replace("${endDate}", endDate)
      .replace("${noOfDays}", props.noOfDays)
      .replace("${firstName}", props.firstName)
      .replace("${lastName}", props.lastName)
      .replace("${email}", props.email)
      .replace("${phone}", props.phone)
      .replace("${totalPriceWithDiscount}", prices.totalPriceWithDiscount)
      .replace("${prices}", JSON.stringify(prices, null, 2))
  };
};
