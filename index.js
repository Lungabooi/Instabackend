/*  Dependencies
*/ 
const express = require('express')

/*
 config - express
*/
const app = express()

/* 
  endpoint
*/
const port = parseInt(process.env.PORT) || 3000

app.get('/',(req,res) => {
    try{
        res.json({
            status : 200,
            msg: "Ú are home"
        })
    }catch (e){
        res.json({
            status : 400,
            msg: "Err"
        })
    }
})

app.get('/posts', (req, res) => {
    let posts = [
        {
            caption:'Golden Gate Bridge',
            location: 'San Fransisco'
        },
        {
            caption:'London Eye',
            location: 'London'
        }
    ]

    try{
        res.json({
            status: 200,
            results : posts
        })
    }catch (e){
        res.json({
            status : 400,
            msg: "Err in post"
        })
    }
})

app.listen(port, () => {
  console.log(`I love Node.js http://localhost:${port}`)
})