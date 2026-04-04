import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export function RouteErrorPage() {
  const error = useRouteError()

  let title = 'Something went wrong'
  let message = 'The page failed to render.'

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`
    message = typeof error.data === 'string' ? error.data : message
  } else if (error instanceof Error) {
    message = error.message
  }

  return (
    <section className="page">
      <h1>{title}</h1>
      <p>{message}</p>
    </section>
  )
}
