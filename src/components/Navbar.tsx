import { Container, Navbar as NavBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <NavBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FiShoppingCart />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              position: "absolute",
              bottom: "-0.3rem",
              right: "-0.3rem",
              width: "1.3rem",
              height: "1.3rem",
            }}
          >
            7
          </div>
        </Button>
      </Container>
    </NavBs>
  );
};

export default Navbar;
