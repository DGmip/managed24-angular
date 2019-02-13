import express from 'express'
import { Request, Response } from 'express'

// expressjs configuration
const port = 8080
const host = '0.0.0.0'

// serve angular dist without docker
const appDir = '/usr/src/app/angular'
const app = express()

// serve the angular static files with middleware
app.use(express.static(appDir))

// serve index.html for angular on all routes
app.get('/*', (req: express.Request, res: express.Response) => {
  res.sendFile(appDir + '/index.html')
})

app.listen(port, host)
console.log('listening on ', port, host)
