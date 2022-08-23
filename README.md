## node logger benchmark


### Node.Js Logger Libraries Comparison
```sh 
Node framework: 
    Koa 2.13.4
    
logging tools:
    winston : 3.8.1
    pino: 8.4.2
    bunyan : 1.8.15
    log4js : 6.6.1

benchmarking tool *(installed globally)* :
    autocannon: 7.9.0 (HTTP1.1 benchmarking tool)
    pm2: 5.2.0 (used for clustring and proccess Management)

```
* loggers confingured in separeted file and can be used as koa middlewares in index.mjs

 * The test done on intel i5-8400T with 16GB of memory
 
* autocannon runs on 8 worker threads for 10 seconds with 100 simultaneously connection

* each test done atleast 3 times and the average number listed on the table

* log4js only worked properly when all pm2 nodes defined as master *(use it with caution)*

| Configuration | Req/s |
| ------ | ------ |
| without log | ~52,000 |
| console.log | ~8,000 |
| winston| ~12,000 |
| log4js | ~15,000 |
| bunyan | ~18,000 |
| bunyan with color formatting | ~17,000 |
| pino (async) | ~21,000 |
| pino (async) with color formatting | ~13,000 |

**For developer experience Winston was the clear winner ,
Both Bunyan and Log4js was easy to use with smaller documentations
Pino was not a really good experience and most features must be installed separately *(rotating, formatting , ...)*
but the documentation was organized betther**

MIT license 
*@DanielOmidi*
