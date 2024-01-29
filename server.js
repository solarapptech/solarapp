const express = require ('express')
const app = express ()
const port = 8000

// Fecha de Actualizado
let fechas = "Lun 29   -  1:00 PM.";

// Banco Central
let tasabcv = 36.20;

// Euro
let tasaeuro = 39.30;

// Monitor Dolar
let tasamonitor = 38.01;

// Binance
let tasabinance = 38.15;

// PayPal
let tasapaypal = 33.40;

// Version Actual
let cur_version = 3;



const percent = tasaeuro / tasabcv


app.get ('/info1', (req, res) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

   const intervalId = setInterval(() =>{
    const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
    res.write(sendData);
   },700)



app.get ('/info2', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const intervalId = setInterval(() =>{
      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);
    },700)



    app.get ('/info3', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const intervalId = setInterval(() =>{
        const sendData3 = `data: ${JSON.stringify(fechas)}\n\n`
        res.write(sendData3);
    },700)
      

      app.get ('/info4', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
        const sendData4 = `data: ${tasaeuro}\n\n`;
        res.write(sendData4);
      },700)


      app.get ('/info5', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
          res.write(sendData5);

      },700)


      app.get ('/info6', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData6 = `data: ${JSON.stringify(tasapaypal) +' Bs.'}\n\n`;
          res.write(sendData6);

      },700)

      app.get ('/info7', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
  
        const intervalId = setInterval(() =>{
          const sendData7 = `data: ${JSON.stringify(cur_version)}\n\n`;
          res.write(sendData7);

      },700)

     
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


      res.on('close', () =>{
        console.log('Client Closed Connection')
        clearInterval(intervalId)
      res.end()
     })
   })
  })
 })
})
})
})
})
// })
// })


app.listen(port,() => {
    console.log (`Server Running on port ${port}`)
})
