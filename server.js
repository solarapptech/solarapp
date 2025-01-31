var cors = require('cors')
const express = require ('express')
const app = express ()
// const port = 8000
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

const { graf_bcv } = require('./output');

// Fecha de Actualizado
// let fechas = "Mié. 4 de Dic, 3:30 PM";

// Banco Central
let tasabcv = 0;
let bcvt = 0;
// let tasabcv = 48.11;

let tasaparalelo = 0;
let paral = 68.34;

let tasapaypal = 0;
let payp = 0;

let tasaeuro = 0;
let euro = 0;


// Euro
// let tasaeuro = 50.71;

// Monitor Dolar
// let tasamonitor = 56.84;

// Binance
// let tasabinance = 57.93;

// PayPal
// let tasapaypal = 50.50;

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

// const childPython3 = spawn('python',['apiparalelo.py']);

// childPython3.stdout.on('data',(data)=>{
//     tasaparalelo = `${data}`;
//     paral = tasaparalelo.trim();
//     launchinfo3();
// })

// function launchinfo3(){
app.get ('/info2', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData2 = `data: ${paral +' Bs.'}\n\n`;
        res.write(sendData2);
})
// }

const childPython4 = spawn('python',['ppapi.py']);

childPython4.stdout.on('data',(data)=>{
    tasapaypal = `${data}`;
    payp = tasapaypal.trim();
    launchinfo4();
})

function launchinfo4(){
    app.get ('/info6', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData6 = `data: ${payp +' Bs.'}\n\n`;
        res.write(sendData6);
})
}

const childPython5 = spawn('python',['eurapi.py']);

childPython5.stdout.on('data',(data)=>{
    tasaeuro = `${data}`;
    euro = tasaeuro.trim();
    launchinfo5();
})

function launchinfo5(){
    app.get ('/info4', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData4 = `data: ${euro +' Bs.'}\n\n`;
        res.write(sendData4);
})
}


childPython.stderr.on('data',(data)=>{
    console.error(`stderr: ${data}`);
})

childPython.on('close',(code)=>{
    console.log(`Se ha cerrado con el codigo ${code}`);
})


// app.get ('/info2', (req, res) =>{
//       res.setHeader('Content-Type', 'text/event-stream')
//       res.setHeader('Access-Control-Allow-Origin', '*')
   

//       const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
//       res.write(sendData2);

// })


  //   app.get ('/info3', (req, res) =>{
  //     res.setHeader('Content-Type', 'text/event-stream')
  //     res.setHeader('Access-Control-Allow-Origin', '*')
       
  //       const sendData3 = `data: ${JSON.stringify(fechas)}\n\n`
  //       res.write(sendData3);
       
  // }) 

    //   app.get ('/info4', (req, res) =>{
    //     res.setHeader('Content-Type', 'text/event-stream')
    //     res.setHeader('Access-Control-Allow-Origin', '*')
         
    //     const sendData4 = `data: ${tasaeuro}\n\n`;
    //     res.write(sendData4);

         
    // })

    //   app.get ('/info5', (req, res) =>{
    //     res.setHeader('Content-Type', 'text/event-stream')
    //     res.setHeader('Access-Control-Allow-Origin', '*')
         

    //       const sendData5 = `data: ${JSON.stringify(tasabinance) +' Bs.'}\n\n`;
    //       res.write(sendData5);

    // })

    //   app.get ('/info6', (req, res) =>{
    //     res.setHeader('Content-Type', 'text/event-stream')
    //     res.setHeader('Access-Control-Allow-Origin', '*')
         

    //       const sendData6 = `data: ${JSON.stringify(tasapaypal) +' Bs.'}\n\n`;
    //       res.write(sendData6);

    // })

      app.get ('/info7', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
         

          const sendData7 = `data: ${JSON.stringify(cur_version)}\n\n`;
          res.write(sendData7);

})

app.get ('/info8', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData8 = `data: ${graf_bcv}\n\n`;
        res.write(sendData8);
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
