import express from 'express'
import swaggerUi from 'swagger-ui-express'
import config from 'dotenv'
const app = express()
const port = 8008
import fs from 'fs'
import { InvestmentCalculation } from './services/calculator/investments.js'
import { InvestmentHandler } from './handler/calculator/investments.js'
let swaggerDocument = JSON.parse(fs.readFileSync('api/openapi.json', 'utf-8'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const calculationService = new InvestmentCalculation()
const calculate = new InvestmentHandler(calculationService)
app.get('/fdReturns', async (req, res) => {
  const a = await calculate.getFDReturn(req)
  res.send(a)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
