const newMessageAdminTemplate = require("../email-templates/admin/new-message");
const {
  isEmailValid,
  isFirstNameValid,
  isPhoneValid
} = require("coolcamper-common");
const utils = require("../utils");

// POST request
module.exports = async (ctx, next) => {
  // get params
  const { name = "", email = "", phone = "", message = "" } = ctx.request.body;

  // validate params
  const isFormValid =
    isFirstNameValid(name.trim()) &&
    isEmailValid(email.trim()) &&
    isPhoneValid(phone.trim()) &&
    isFirstNameValid(message.trim());

  if (!isFormValid) {
    ctx.ok({ error: "Datele introduse nu sunt valide!" });
  } else {
    // send email
    const emailTemplate = newMessageAdminTemplate({
      name,
      email,
      phone,
      message
    });
    const emailSent = await utils.sendEmail(emailTemplate);
    if (emailSent) {
      ctx.ok({ error: null });
    } else {
      ctx.ok({ error: "S-a produs o eroare. Încearcă din nou!" });
    }
  }
};
