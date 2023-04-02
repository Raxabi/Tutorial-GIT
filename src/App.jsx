import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Start from './routes/Start'
import QueEsUnControlDeVersiones from "./routes/QueEsUnControlDeVersiones"
import GitVsSVN from './routes/GitVsSVN'
import CualElegir from './routes/CualElegir'
import Tutorial from "./routes/Tutorial"
import PaginaError from './routes/PaginaError'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
    errorElement: <PaginaError />
  }, {
    path: "/que-es-un-sistema-de-control-de-versiones",
    element: <QueEsUnControlDeVersiones />,
    errorElement: <PaginaError />

  }, {
    path: "/git-vs-svn",
    element: <GitVsSVN />,
    errorElement: <PaginaError />
  }, {
    path: "/cual-elegir",
    element: <CualElegir />,
    errorElement: <PaginaError />
  }, {
    path: "/tutorial",
    element: <Tutorial />,
    errorElement: <PaginaError />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
