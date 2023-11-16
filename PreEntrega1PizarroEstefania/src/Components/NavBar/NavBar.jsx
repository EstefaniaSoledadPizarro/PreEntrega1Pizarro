import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        { <Container>
          <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mates</Nav.Link>
            <Nav.Link href="#features">Termos</Nav.Link>
            <Nav.Link href="#pricing">Bombillas</Nav.Link>
            <Nav.Link href="#pricing"> <CartWidget/> </Nav.Link>
          </Nav>
        </Container> }
      </Navbar>
      </div>
  );
}

export default NavBar;