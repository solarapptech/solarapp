var cors = require('cors')
const express = require ('express')
const app = express ()
// const port = 8000
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

// Fecha de Actualizado
// let fechas = "Mié. 4 de Dic, 3:30 PM";

// Banco Central
let tasabcv = 0;
let bcvt = 0;
// let tasabcv = 48.11;

// Euro
let tasaeuro = 50.71;

// Monitor Dolar
let tasamonitor = 57.86;

// Binance
// let tasabinance = 57.93;

// PayPal
let tasapaypal = 51.00;

// Version Actual
let cur_version = 3;

// Valor Alterable
let xval = 4;

let tasabinance = 0;
let bncv = 0;


const moment = require('moment-timezone'); 
require('moment/locale/es'); 

moment.locale('es');  
let venezuelaTime = moment().tz('America/Caracas').format('dddd, D MMM YYYY, hh:mm A');

app.get ('/info3', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')
       
        const sendData3 = `data: ${JSON.stringify(venezuelaTime)}\n\n`
        res.write(sendData3);
       
})


const { spawn } = require('child_process');

const childPython = spawn('python',['apibnc.py']);

childPython.stdout.on('data',(data)=>{
    tasabinance = `${data}`;
    bncv = tasabinance.trim();
    launchinfo();
})

function launchinfo(){
app.get ('/info5', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData5 = `data: ${bncv +' Bs.'}\n\n`;
        res.write(sendData5);
})
}

childPython.stderr.on('data',(data)=>{
    console.error(`stderr: ${data}`);
})

childPython.on('close',(code)=>{
    console.log(`Se ha cerrado con el codigo ${code}`);
})


// Version 1

// app.get ('/info1', (req, res) =>{
//    res.setHeader('Content-Type', 'text/event-stream')
//    res.setHeader('Access-Control-Allow-Origin', '*')

//     const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
//     res.write(sendData);

// })

const childPython2 = spawn('python',['bcvapi.py']);

childPython2.stdout.on('data',(data)=>{
    tasabcv = `${data}`;
    bcvt = tasabcv.trim();
    launchinfo2();
})

function launchinfo2(){
    app.get ('/info1', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData1 = `data: ${bcvt +' Bs.'}\n\n`;
        res.write(sendData1);
})
}



app.get ('/info2', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')
   

      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);

})


  //   app.get ('/info3', (req, res) =>{
  //     res.setHeader('Content-Type', 'text/event-stream')
  //     res.setHeader('Access-Control-Allow-Origin', '*')
       
  //       const sendData3 = `data: ${JSON.stringify(fechas)}\n\n`
  //       res.write(sendData3);
       
  // }) 

      app.get ('/info4', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         
        const sendData4 = `data: ${tasaeuro}\n\n`;
        res.write(sendData4);

         
    })

    //   app.get ('/info5', (req, res) =>{
    //     res.setHeader('Content-Type', 'text/event-stream')
    //     res.setHeader('Access-Control-Allow-Origin', '*')
         

    //       const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
    //       res.write(sendData5);

    // })

      app.get ('/info6', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         

          const sendData6 = `data: ${JSON.stringify(tasapaypal) +' Bs.'}\n\n`;
          res.write(sendData6);

    })

      app.get ('/info7', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         

          const sendData7 = `data: ${JSON.stringify(cur_version)}\n\n`;
          res.write(sendData7);

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


const sendDatab = `data: ${JSON.stringify(tasabcv)}\n\n`;
res.write(sendDatab);

})


// app.listen(port,() => {
//     console.log (`Server Running on port ${port}`)
// })
