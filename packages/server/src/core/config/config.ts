import { Logger } from 'core/Logger'
import * as dotenv from 'dotenv'

const loadEnv = () => {
  const logger = new Logger('config:loadEnv')

  let env = {}
  const { NODE_ENV = 'development' } = process.env

  logger.log(`Loading env for ${NODE_ENV}`)

  const envFiles = [
    `.env.${NODE_ENV}.local`,
    `.env.${NODE_ENV}`,
    '.env.local',
    '.env',
  ]

  envFiles.forEach((file) => {
    env = {
      ...dotenv.config({ path: file }).parsed,
      ...env,
    }
  })

  logger.log(`Loaded environment variables`)
  logger.log(env)

  return process.env
}

const env = loadEnv()

const normalizePort = () => {
  const DEFAULT_PORT = 4000
  const port = +(process.env.PORT ?? DEFAULT_PORT)

  if (Number.isNaN(port)) {
    return DEFAULT_PORT
  }
  return port
}

const PORT = normalizePort()
const { MONGODB_URI } = env

const config = {
  PORT,
  MONGODB_URI,
}

export default config
