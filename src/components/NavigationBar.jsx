import { Container, Nav, Navbar } from "react-bootstrap"
import { FaHouseDamage } from "react-icons/fa"
import usePages from "../context/usePages"
import contentData from "../Data";

const NavigationBar = () => {
  const {setActualPage} = usePages();

  const findSelectedPage = (id) => (
    contentData.find(page => page.id === id)
  )

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto align-items-center">
            <Nav.Link className="me-5" onClick={() => setActualPage(findSelectedPage(0))}>
              <FaHouseDamage size={40} />
            </Nav.Link>
            <Nav.Link className="text-center me-5" onClick={() => setActualPage(findSelectedPage(1))}>
              ¿Que es<br/>
              un sistema de control de versiones?
            </Nav.Link>
            <Nav.Link className="text-center me-5" onClick={() => setActualPage(findSelectedPage(2))}>
              Git<br/>
              ⚔VS⚔<br/>
              SVN
            </Nav.Link>
            <Nav.Link className="text-center me-5" onClick={() => setActualPage(findSelectedPage(3))}>
              ¿Cuándo decantarte<br/>
              por uno u otro?
            </Nav.Link>
            <Nav.Link className="text-center" onClick={() => setActualPage(findSelectedPage(4))}>
              Pequeño proyecto de ejemplo<br/>
              Sobre el funcionamiento de git
            </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar