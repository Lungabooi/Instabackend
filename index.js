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
const port = 3000

app.get('/posts', (request, response) => {
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
  response.send(posts)
})

app.listen(port, () => {
  console.log(`I love Node.js ${port}`)
})