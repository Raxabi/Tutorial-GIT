import { useRouteError } from "react-router-dom"

import "../public/css/errores.css"

const PaginaError = () => {
  const error = useRouteError()

  return (
    <div id="errors">
      <div id="errors-container">
        <h1>Esta pagina no existe!</h1>
        <h2>Codigo de error: {error.statusText || error.message}</h2>
      </div>
    </div>
  )
}

export default PaginaError