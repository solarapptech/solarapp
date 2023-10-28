const express = require ('express')
const app = express ()
const port = 8000


const tasabcv = 35.02
const tasamonitor = 37.24

let date = new Date();
let options = {timeZone: 'America/Caracas'};
let caracas = date.toLocaleString('es-VE', options);



app.get ('/info1', (req, res) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

    const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
    res.write(sendData);




app.get ('/info2', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);



app.get ('/info3', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const sendData3 = `data: ${JSON.stringify(caracas)}\n\n`;
      res.write(sendData3);
      


res.on('close', () =>{
      console.log('Client Closed Connection')
      clearInterval(intervalId)
      res.end()
    })
   })
  })
})


app.listen(port,() => {
    console.log (`Server Running on port ${port}`)
})


app.listen(port,() => {
    console.log (`Server Running on port ${port}`)
})
