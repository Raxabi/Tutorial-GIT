import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaHouseDamage } from "react-icons/fa"

import "../public/css/BarraNavegacion.css"

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto align-items-center">
            <NavLink
              className="text-center me-5"
              to={"/"}
            >
              <FaHouseDamage className="link" size={40} />
            </NavLink>
            <NavLink
              className="text-center me-5 text-decoration-none link"
              to={"/que-es-un-sistema-de-control-de-versiones"}
            >
              ¿Que es<br/>
              un sistema de control de versiones?
            </NavLink>
            <NavLink
              className="text-center me-5 text-decoration-none link"
              to={"/git-vs-svn"}
            >
              Git<br/>
              ⚔VS⚔<br/>
              SVN
            </NavLink>
            <NavLink
              className="text-center me-5 text-decoration-none link"
              to={"/cual-elegir"}
            >
              ¿Cuándo decantarte<br/>
              por uno u otro?
            </NavLink>
            <NavLink
              className="text-center text-decoration-none link"
              to={"/tutorial"}
            >
              Pequeño proyecto de ejemplo<br/>
              Sobre el funcionamiento de git
            </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar