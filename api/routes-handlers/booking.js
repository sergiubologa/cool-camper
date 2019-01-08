const newAdminBookingTemplate = require("../email-templates/admin/new-booking");
const {
  getNoOfDays,
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
  isPhoneValid
} = require("coolcamper-common");
const utils = require("../utils");

// POST request
module.exports = async (ctx, next) => {
  // get params
  const {
    startDate,
    endDate,
    firstName = "",
    lastName = "",
    email = "",
    phone = ""
  } = ctx.request.body;

  // validate params
  const noOfDays = getNoOfDays(startDate, endDate);
  const isBookingValid =
    noOfDays > 2 &&
    isFirstNameValid(firstName.trim()) &&
    isLastNameValid(lastName.trim()) &&
    isEmailValid(email.trim()) &&
    isPhoneValid(phone.trim());

  if (!isBookingValid) {
    ctx.ok({ error: "Datele selectate nu sunt valide!" });
  } else {
    // send email
    const emailTemplate = newAdminBookingTemplate({
      startDate,
      endDate,
      noOfDays,
      firstName,
      lastName,
      email,
      phone
    });
    const emailSent = await utils.sendEmail(emailTemplate);
    if (emailSent) {
      ctx.ok({ error: null });
    } else {
      ctx.ok({ error: "S-a produs o eroare. Încearcă din nou!" });
    }
  }
};
