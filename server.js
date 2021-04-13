const express = require('express')
const cors = require ('cors');
const { response } = require('express');
const path = require('path')
const app = express();
const PORT = 8080;

app.use(cors());
app.set('trust proxy', true);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('index.html'))

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT}`)
})

app.post('/post', cors(), function(req,res) {
    let data = req.body
    console.log(data)
    res.send('200 request recieved')
})


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

