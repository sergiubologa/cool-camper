const koa = require("koa");
const app = new koa();

app.use(async (ctx, next) => {
  ctx.body = "Hello world!";
});

app.listen(process.env.PORT);
