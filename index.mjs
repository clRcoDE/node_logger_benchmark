import koa from 'koa'



import {normalLog} from './modules/normalLog.mjs'
import {winstonLogger} from './modules/winston.mjs'
import {bunyanLogger} from './modules/bunyan.mjs'
import {pinoLogger} from './modules/pino.mjs'
import {log4jsLogger} from './modules/log4js.mjs' 
const app = new koa();

// app.use(normalLog);

// app.use(winstonLogger);

app.use(log4jsLogger)


const { SERVER_PORT: port = 5010 } = process.env;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});