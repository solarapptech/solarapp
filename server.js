const express = require ('express')
const app = express ()
const port = 8000


const tasabcv = 35.12
const tasamonitor = 37.12

// let date = new Date();
// let options = {timeZone: 'America/Caracas'};
let caracas = "7:11 pm."


app.get ('/info1', (req, res) =>{
   res.setHeader('Content-Type', 'text/event-stream')
   res.setHeader('Access-Control-Allow-Origin', '*')

   const intervalId = setInterval(() =>{
    const sendData = `data: ${JSON.stringify(tasabcv) +' Bs.'}\n\n`;
    res.write(sendData);
   },800)



app.get ('/info2', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const intervalId = setInterval(() =>{
      const sendData2 = `data: ${JSON.stringify(tasamonitor) +' Bs.'}\n\n`;
      res.write(sendData2);
    },800)


    app.get ('/info3', (req, res) =>{
      res.setHeader('Content-Type', 'text/event-stream')
      res.setHeader('Access-Control-Allow-Origin', '*')

      const sendData3 = `data: ${JSON.stringify(7:11 pm.)}\n\n`;
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
