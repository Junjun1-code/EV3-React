import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Artico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/catalog">Catalog</Nav.Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cart">
                Carro
              </NavDropdown.Item>
            
            { session === null && user === null ? ( 
              <Nav.Link href="/login"> Log in </Nav.Link>
            ) : (
              <Nav.Link href="auth/{pathname.find.unfinished}"> ${user} </Nav.Link>
            ) }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;