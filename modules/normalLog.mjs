"use strict";

import fs from "node:fs/promises";
import path from'path'
// export const getRandomArbitrary = (1000000, 9999999) =>

const getRandomArbitrary = () => {
  return Math.random() * (9999999 - 1000000) + 1000000;
};

export const normalLog = async (ctx) => {

    const __dirname = path.resolve();
    // console.log("__dirname:    ", __dirname);
  const NodeMessage = `log at ${Date.now()} user:${getRandomArbitrary()} \n`;
  // fs.writeFile("FILE.TXT", "TEXT", (err)=>{});
  await fs.appendFile(`${__dirname}/modules/file.log`, NodeMessage, (err) => {
    console.log("This is Write error", err);
  });

  console.warn("\x1b[31m" + NodeMessage);
  ctx.body = "hello Koa";
};
