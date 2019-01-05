const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const respond = require("koa-respond");
const newAdminBookingTemplate = require("./email-templates/admin/new-booking");
const app = new koa();
const router = new Router();
app.use(bodyParser());
app.use(respond());

const utils = require("./utils");

router.get("/api", ctx => {
  ctx.noContent();
});

router.post("/api/booking", async (ctx, next) => {
  // get params
  const {
    startDate,
    endDate,
    firstName = "",
    lastName = "",
    email = "",
    phone = ""
  } = ctx.request.body;

  // validate them
  const noOfDays = utils.getNoOfDays(startDate, endDate);
  const isBookingValid =
    noOfDays > 3 &&
    utils.isFirstNameValid(firstName.trim()) &&
    utils.isLastNameValid(lastName.trim()) &&
    utils.isEmailValid(email.trim()) &&
    utils.isPhoneValid(phone.trim());

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
      ctx.ok({ error: "S-a produs o eroare. Incearca din nou!" });
    }
  }
});

app.use(router.routes());

// makes sure a 405 Method Not Allowed is sent
app.use(router.allowedMethods());

app.listen(process.env.PORT);
