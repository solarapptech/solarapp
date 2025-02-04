var cors = require('cors')
const express = require ('express')
const app = express ()
let server = app.listen(8000);
server.keepAliveTimeout = 80000;
server.headersTimeout = 81000;
app.use(cors())

const { graf_fecha } = require('./output/outputFecha.js');
const { graf_bcv } = require('./output/outputBcv.js');
const { graf_eur } = require('./output/outputBcv_eur.js');
const { graf_paralelo } = require('./output/outputParalelo.js');
const { graf_payp } = require('./output/outputPayp.js');

let tasabcv = 0;
let bcvt = 0;

let tasaparalelo = 0;
let paral = 71.31;

let tasapaypal = 0;
let payp = 0;

let tasaeuro = 0;
let euro = 0;

// Version Actual
let cur_version = 3;

// Valor Alterable
let xval = 4;

let tasabinance = 0;
let bncv = 0;

let tasabinance2 = 0;
let bncv2 = 0;


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

const childPython13 = spawn('python',['apibnc2.py']);

childPython13.stdout.on('data',(data)=>{
    tasabinance2 = `${data}`;
    bncv2 = tasabinance2.trim();
    launchinfo13();
})

function launchinfo13(){
app.get ('/info13', (req, res) =>{
        res.setHeader('Content-Type', 'text/event-stream')
        res.setHeader('Access-Control-Allow-Origin', '*')
    
        const sendData13 = `data: ${bncv2 +' Bs.'}\n\n`;
        res.write(sendData13);
})
}


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


app.get ('/info9', (req, res) =>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const sendData9 = `data: ${graf_eur}\n\n`;
    res.write(sendData9);
})

app.get ('/info10', (req, res) =>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const sendData10 = `data: ${graf_payp}\n\n`;
    res.write(sendData10);
})

app.get ('/info11', (req, res) =>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const sendData11 = `data: ${graf_paralelo}\n\n`;
    res.write(sendData11);
})

app.get ('/info12', (req, res) =>{
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const sendData12 = `data: ${graf_fecha}\n\n`;
    res.write(sendData12);
})

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
