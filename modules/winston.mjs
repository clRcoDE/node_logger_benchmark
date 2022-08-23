
// export const getRandomArbitrary = (1000000, 9999999) =>
import winston from "winston";



export const wlogger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "infow.log", level: "info" }),
    new winston.transports.Console({ format: winston.format.combine(
        winston.format.label({
            label: `Label`
        }),
        winston.format.colorize(),
        winston.format.prettyPrint(),
        winston.format.align(),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
 }),
  ],
});




const getRandomArbitrary = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};

export const winstonLogger = async (ctx) => {
    const newLogRandomizer = Math.random()

    try{
        if(newLogRandomizer > 0.5){
            wlogger.info(`log at ${getRandomArbitrary()}`)
            
        }else {
            throw new Error("below 0.5")
        }
    }catch(err){
        wlogger.error(`log at ${err} ${getRandomArbitrary()}`)
    }
 

  ctx.body = "hello Koa";
};
