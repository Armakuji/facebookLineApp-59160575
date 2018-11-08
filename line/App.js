const express = require('express')
const line = require('@line/bot-sdk')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 3000

const user = 'Ud74439049f020a46851de077f96a0f09'

const config ={
    channelAccessToken: "gBNhgw1hQw9Ex0c/N/lsELu6c0UZVRsCXAHN/EVwIhLFKzuDFaw9t/Z6od0nlDEkwZfkD/ZxGiuRwsrq56QMQD97757p4qaWGbmOhx4aA73fx9lVFxCPcF1Fxh9Xh3c/GuroRLtJnSNThaD/2IOPFgdB04t89/1O/w1cDnyilFU=",
    channelSecret: "55524024199f804d5ee6a69d970ec931"
}

const client = new line.Client(config)
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    res.send("Hello World")
})

app.post('/user',(req,res) => {
    console.log(req.body)

    const message = {
        type: 'text',
        text: req.body.name
    };

    const message1 = {
        type: 'text',
        text: req.body.email
    }

    const message2 = {
        type: 'image',
        originalContentUrl: req.body.picture,
        previewImageUrl: req.body.picture
      };

      client.pushMessage(user, message, message1, message2)
      .then(() => {
        
      })
      
     
      
})


app.listen( port ,() => console.log(`App running ${port}`))