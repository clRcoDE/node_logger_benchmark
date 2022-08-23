// // export const getRandomArbitrary = (1000000, 9999999) =>
// // import winston from "winston";

// import pino from 'pino'
// const pino = pino()
// const transport = pino.transport({
//   target: 'pino-pretty',
//   options: { destination: './infop.log' }
// })
// pino(transport)

// const levels = {
//     emerg: 80,
//     alert: 70,
//     crit: 60,
//     error: 50,
//     warn: 40,
//     notice: 30,
//     info: 20,
//     debug: 10,
//   };

import path from "path";
import pino from "pino";
import pretty from 'pino-pretty'
// import { transport } from "winston";
// const myPino = pretty(pino)
const __dirname = path.resolve();

const getRandomArbitrary = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};

const levels = {
  emerg: 80,
  alert: 70,
  crit: 60,
  error: 50,
  warn: 40,
  notice: 30,
  info: 20,
  debug: 10,
};


// const stream = pretty({
//   colorize: true
// })
// const logger = pino(stream)

// const stream = pretty({
//   colorize: true,
//   destination:process.stdout
// })
const streams = [
  { stream: process.stdout},
  { stream: pino.destination({dest:`${__dirname}/combined.log`, sync:false}) },
]
const pLogger = pino(
  // pretty({colorize:true}),
  {
    level:'info',
    
    // customLevels: levels,
    // useOnlyCustomLevels: true,
    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.multistream(streams),
  
);

export const pinoLogger = async (ctx) => {
  const newLogRandomizer = Math.random();
  try {
    if (newLogRandomizer > 0.5) {
      pLogger.info(`log at ${getRandomArbitrary()}`);
    } else {
      throw new Error("below 0.5");
    }
  } catch (err) {
    pLogger.error(`log at ${err} ${getRandomArbitrary()}`);
  }

  ctx.body = "hello Koa";
};
