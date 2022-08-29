import process from 'node:process';
import koa from 'koa'



// import {normalLog} from './modules/normalLog.mjs'
// import {winstonLogger} from './modules/winston.mjs'
import {bunyanLogger,blogger} from './modules/bunyan.mjs'
// import {pinoLogger} from './modules/pino.mjs'
// import {log4jsLogger} from './modules/log4js.mjs' 
const app = new koa();

// app.use(normalLog);

// app.use(winstonLogger);
// app.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (err) {
//     // blogger.error(`bunyan log${err}`)
//     err.status = err.statusCode || err.status || 500;
//     ctx.body = err.message;
//     // ctx.app.emit('error', `${err}`, ctx);
//   }
// });

app.on('error', (err, ctx) => {
  blogger.fatal(err, `${err}\nERROR STACKTRACE:`);
  // ctx.throw(500, 'error');
  // process.exit(-1)
  
  err.status = err.statusCode || err.status || 500;
  ctx.body = err.message;
  // ctx.app.emit('error', err, ctx);
});

app.use(bunyanLogger)

const { SERVER_PORT: port = 5010 } = process.env;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});




process.on('uncaughtException', (err, origin) => {

  console.log("WAAAAAAAT",err);
  process.exit(-1)
});

