import express from 'express'
import { Request, Response } from 'express'

// expressjs configuration
const port = 4200
const host = '0.0.0.0'

// serve angular dist without docker
const withoutDocker = '/home/ben/code/node/managed/angular/search-app/dist/search-app'
const app = express()

// serve the angular static files with middleware
app.use(express.static(withoutDocker))

// serve index.html for angular on all routes
app.get('/*', (req: express.Request, res: express.Response) => {
  res.sendFile(withoutDocker + '/index.html')
})

app.listen(port, host)
console.log('listening on ', port, host)
