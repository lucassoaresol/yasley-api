import 'express-async-errors'
import express from 'express'
import { errorHandler } from './errors'
import {
  imageRouter,
  passwordRouter,
  sessionRouter,
  tokenRouter,
  userRouter,
} from './router'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  next()
})

app.use('/users', userRouter)
app.use('/login', sessionRouter)
app.use('/token', tokenRouter)
app.use('/password', passwordRouter)
app.use('/images', imageRouter)

app.use(errorHandler)

export default app
