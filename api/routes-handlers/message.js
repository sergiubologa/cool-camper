const newMessageAdminTemplate = require("../email-templates/admin/new-message");
const { isEmailValid, isFirstNameValid } = require("coolcamper-common");
const utils = require("../utils");

// POST request
module.exports = async (ctx, next) => {
  // get params
  const { name = "", email = "", message = "" } = ctx.request.body;

  // validate params
  const isFormValid =
    isFirstNameValid(name.trim()) &&
    isEmailValid(email.trim()) &&
    isFirstNameValid(message.trim());

  if (!isFormValid) {
    ctx.ok({ error: "Datele introduse nu sunt valide!" });
  } else {
    // send email
    const emailTemplate = newMessageAdminTemplate({
      name,
      email,
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
