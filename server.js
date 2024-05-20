var cors = require('cors')
const express = require ('express')
const app = express ()
// const port = 8000
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

// Fecha de Actualizado
let fechas = "Lun, 20 - 1:00 PM";

// Banco Central
let tasabcv = 36.57;

// Euro
let tasaeuro = 39.75;

// Monitor Dolar
let tasamonitor = 39.80;

// Binance
let tasabinance = 39.90;

// PayPal
let tasapaypal = 34.60;

// Version Actual
let cur_version = 3;

// Valor Alterable
let xval =4;


// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://solartech.onrender.com"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Private-Network", true);
//   res.setHeader("Access-Control-Max-Age", 7200);

//   next();
// });


// Version 1

app.get ('/info1', (req, res) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

    const intervalId = setInterval(() =>{
    const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
    res.write(sendData);

   },700)
})

// app.get ('/info1', (req, res) =>{
//   res.setHeader('Content-Type', 'text/event-stream')
//   res.setHeader('Access-Control-Allow-Origin', '*')

//   request('*', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//      const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
//      res.write(sendData);
//   }
//  });
// })



app.get ('/info2', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')
   
      const intervalId = setInterval(() =>{
      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);

    },700)
})


    app.get ('/info3', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')
       
      const intervalId = setInterval(() =>{
        const sendData3 = `data: ${JSON.stringify(fechas)}\n\n`
        res.write(sendData3);
    },700)
  }) 

      app.get ('/info4', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         
        const intervalId = setInterval(() =>{
        const sendData4 = `data: ${tasaeuro}\n\n`;
        res.write(sendData4);
      },700)
    })

      app.get ('/info5', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         
        const intervalId = setInterval(() =>{
          const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
          res.write(sendData5);
      },700)
    })

      app.get ('/info6', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         
        const intervalId = setInterval(() =>{
          const sendData6 = `data: ${JSON.stringify(tasapaypal) +' Bs.'}\n\n`;
          res.write(sendData6);
      },700)
    })

      app.get ('/info7', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         
        const intervalId = setInterval(() =>{
          const sendData7 = `data: ${JSON.stringify(cur_version)}\n\n`;
          res.write(sendData7);
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


        

//       res.on('close', () =>{
//         console.log('Client Closed Connection')
//         clearInterval(intervalId)
//       res.end()
// })


// Version 2

app.get ('/inforeq', (req, res) =>{
res.setHeader('Content-Type', 'text/event-stream')
res.setHeader("Access-Control-Allow-Origin", "*")
   res.status(200).set({
        "connection": "keep-alive",
        "cache-control": "no-cache",
        "content-Type": "text/event-stream"
    });

const intervalId = setInterval(() =>{
const sendDatab = `data: ${JSON.stringify(tasabcv)}\n\n`;
res.write(sendDatab);
},700)
})


// app.listen(port,() => {
//     console.log (`Server Running on port ${port}`)
// })
