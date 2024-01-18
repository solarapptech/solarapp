const express = require ('express')
const app = express ()
const port = 8000


const tasabcv = 36.13
const tasamonitor = 38.60
const tasaeuro = 39.25

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

      const sendData3 = `data: ${JSON.stringify('Jue 18   -   3:30 PM')}\n\n`;
      res.write(sendData3);
      

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
         const sendData5 = `data: ${JSON.stringify(tasabcv * percent) +' Bs.'}\n\n`;
         res.write(sendData5);
        },700)
    
     
    app.get ('/info6', (req, res) =>{
       res.setHeader('Content-Type', 'text/event-stream')
       res.setHeader('Access-Control-Allow-Origin', '*')
    
       const intervalId = setInterval(() =>{
        const sendData6 = `data: ${JSON.stringify(tasamonitor * percent) +' Bs.'}\n\n`;
        res.write(sendData6);
       },700)


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


app.listen(port,() => {
    console.log (`Server Running on port ${port}`)
})
