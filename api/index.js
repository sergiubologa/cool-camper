const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const respond = require("koa-respond");
const app = new koa();
const router = new Router();
app.use(bodyParser());
app.use(respond());

router.get("/api", require("./routes-handlers"));
router.post("/api/booking", require("./routes-handlers/booking"));
router.post("/api/message", require("./routes-handlers/message"));

app.use(router.routes());

// makes sure a 405 Method Not Allowed is sent
app.use(router.allowedMethods());

app.listen(process.env.PORT);
