const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const respond = require("koa-respond");
const indexHandler = require("./routes-handlers");
const bookingHandler = require("./routes-handlers/booking");
const messageHandler = require("./routes-handlers/message");
const app = new koa();
const router = new Router();
app.use(bodyParser());
app.use(respond());

router.get("/api", indexHandler);
router.post("/api/booking", bookingHandler);
router.post("/api/message", messageHandler);

app.use(router.routes());

// makes sure a 405 Method Not Allowed is sent
app.use(router.allowedMethods());

app.listen(process.env.PORT);
