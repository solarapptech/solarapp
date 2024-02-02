const express = require ('express')
const app = express ()
// const port = 8000
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;

// Fecha de Actualizado
let fechas = "Jue 1   -  10:00 PM.";

// Banco Central
let tasabcv = 36.23;

// Euro
let tasaeuro = 39.24;

// Monitor Dolar
let tasamonitor = 37.95;

// Binance
let tasabinance = 38.15;

// PayPal
let tasapaypal = 33.40;

// Version Actual
let cur_version = 3;

// Valor Alterable
let xval = 5;



const percent = tasaeuro / tasabcv

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://solartech.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});


// Version 1

app.get ('/info1', (req, res, next) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

   const intervalId = setInterval(() =>{
    const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
    res.write(sendData);
    next();
   },700)
  })


app.get ('/info2', (req, res, next) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const intervalId = setInterval(() =>{
      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);
    },700)
    next();
  })


    app.get ('/info3', (req, res, next) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const intervalId = setInterval(() =>{
        const sendData3 = `data: ${JSON.stringify(fechas)}\n\n`
        res.write(sendData3);
        next();
    },700)
  })


      app.get ('/info4', (req, res, next) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
        const sendData4 = `data: ${tasaeuro}\n\n`;
        res.write(sendData4);
        next();
      },700)
    })


      app.get ('/info5', (req, res, next) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
          res.write(sendData5);
          next();
      },700)
    })


      app.get ('/info6', (req, res, next) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData6 = `data: ${JSON.stringify(tasapaypal) +' Bs.'}\n\n`;
          res.write(sendData6);
          next();
      },700)
    })


      app.get ('/info7', (req, res, next) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData7 = `data: ${JSON.stringify(cur_version)}\n\n`;
          res.write(sendData7);
          next();
      },700)
   })
     
    // app.get ('/info6', (req, res) =>{
    //    res.setHeader('Content-Type', 'text/event-stream')
    //    res.setHeader('Access-Control-Allow-Origin', '*')
    
    //    const intervalId = setInterval(() =>{
    //     const sendData6 = `data: ${JSON.stringify(tasamonitor * percent) +' Bs.'}\n\n`;
    //     res.write(sendData6);
    //    },700)


      //  app.get ('/info7', (req, res) =>{
      //   res.setHeader('Content-Type', 'text/event-stream')
      //   res.setHeader('Access-Control-Allow-Origin', '*')
     
      //   const intervalId = setInterval(() =>{
      //    const sendData7 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
      //    res.write(sendData7);
      //   },700)


        

     //  res.on('close', () =>{
     //    console.log('Client Closed Connection')
     //    clearInterval(intervalId)
     //  res.end()
     // })

// Version 2

app.get ('/inforeq', (req, res) =>{
res.setHeader('Content-Type', 'text/event-stream')
res.setHeader('Access-Control-Allow-Origin', '*')

const intervalId = setInterval(() =>{
const sendDatab = `data: ${JSON.stringify(tasabcv, 7)}\n\n`;
res.write(sendDatab);
},700)
})


// app.listen(port,() => {
//     console.log (`Server Running on port ${port}`)
// })
