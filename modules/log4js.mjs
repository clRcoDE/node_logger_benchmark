
import path from "path";
// import pino from "pino";
const __dirname = path.resolve();
import log4js from 'log4js'
const Llogger = log4js.getLogger()
Llogger.level ='info'


log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" }, weez:{type:"console" } },
  categories: { default: { appenders: ["cheese","weez"], level: "info" } },
});

const getRandomArbitrary = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};



export const log4jsLogger = async (ctx) => {
  const newLogRandomizer = Math.random();
  try {
    if (newLogRandomizer > 0.5) {
      Llogger.info(`log at ${getRandomArbitrary()}`);
    } else {
      throw new Error("below 0.5");
    }
  } catch (err) {
    Llogger.error(`log at ${err} ${getRandomArbitrary()}`);
  }

  ctx.body = "hello Koa";
};
