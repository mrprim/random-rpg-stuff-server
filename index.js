const express = require('express')
const rrs = require('@mrprim/random-rpg-stuff')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(rrs)) // { test: 'Hello World!' }))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
