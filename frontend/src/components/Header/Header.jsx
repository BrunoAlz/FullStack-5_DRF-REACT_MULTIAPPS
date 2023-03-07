import { Container, Nav, Navbar } from "react-bootstrap";

// ROUTER
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect className="p-3"> 
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-basket-shopping"></i> DOG's Multi API
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>

          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end m-0">
            <LinkContainer to="/login" className="m-2">
                <Nav.Link>
                  <i className="fas fa-user"></i> Login
                </Nav.Link>
            </LinkContainer>
            <Navbar.Text>
             - Bruno
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;