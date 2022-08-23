
// export const getRandomArbitrary = (1000000, 9999999) =>
// import winston from "winston";
import bunyan from 'bunyan'

export const blogger = bunyan.createLogger({
    name:'myapp',
    level:"info",
    serializers: {
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res,
      },

    streams:[
        {
            level:'info',
            stream:process.stdout,
            
        },
        {
            level:'info',
            path:'./infob.log'
        }
    ]

});




const getRandomArbitrary = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};

export const bunyanLogger = async (ctx) => {

    
    
    const newLogRandomizer = Math.random()

    try{
        if(newLogRandomizer > 0.5){
            blogger.info(`log at ${getRandomArbitrary()}`)
            
        }else {
            throw new Error("below 0.5")
        }
    }catch(err){
        blogger.error(`log at ${err} ${getRandomArbitrary()}`)
    }
 

  ctx.body = "hello Koa";
};
