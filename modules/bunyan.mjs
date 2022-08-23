// export const getRandomArbitrary = (1000000, 9999999) =>
// import winston from "winston";
import bunyan from "bunyan";
// import colors from 'colors'

import bformat from 'bunyan-format'
const formatOut = bformat({outputMode:'short'})


export const blogger = bunyan.createLogger({
  name: "myapp",
  streams: [
    {
      level: "info",
      stream: formatOut,
    },
    {
      level: "info",
      path: "./infob.log",
    },
  ],
});

const getRandomArbitrary = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};

export const bunyanLogger = async (ctx) => {
  const newLogRandomizer = Math.random();

  try {
    if (newLogRandomizer > 0.5) {
      blogger.info(`log at ${getRandomArbitrary()}`);
    } else {
      throw new Error("below 0.5");
    }
  } catch (err) {
    blogger.error({
      body: {
        email: `log at ${err} ${getRandomArbitrary()}`,
      },
    });
  }

  ctx.body = "hello Koa";
};
