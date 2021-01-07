const normalizePort = () => {
  const DEFAULT_PORT = 4000
  const port = +(process.env.PORT ?? DEFAULT_PORT)

  if (Number.isNaN(port)) {
    return DEFAULT_PORT
  }
  return port
}

export const PORT = normalizePort()

export const { MONGODB_URI } = process.env
