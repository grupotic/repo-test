const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/test', (req, res) => res.send('Grupo Tic'))


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))