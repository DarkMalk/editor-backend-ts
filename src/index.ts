import { notFound, userExtractor, handleErrors } from './middlewares'
import { notesRouter, usersRouter } from './v1/routes'
import { PORT } from './config/env'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const server = express()

// Middleware
server.use(express.json())
server.use(morgan('dev'))
server.use(cors())

// Routes
server.use('/api/v1/notes', userExtractor, notesRouter)
server.use('/api/v1', usersRouter)

// Middleware
server.use(handleErrors)
server.use(notFound)

// Server listen
server.listen(PORT, () => {
  console.log(`🚀 Server listen on url: http://localhost:${PORT}`)
})
