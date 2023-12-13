import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <Logo />
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='pestaña'>Home</NavLink>
            <NavLink to="/category/celulares">Mates</NavLink>
            <NavLink to="/category/termos">Termos</NavLink>
            <NavLink to="/category/bombillas">Bombillas</NavLink>
          </Nav>
          <NavLink to="/cart" className="navbar-cart">
            <CartWidget />
          </NavLink>
          <button id='contadorBtn'>0</button>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;