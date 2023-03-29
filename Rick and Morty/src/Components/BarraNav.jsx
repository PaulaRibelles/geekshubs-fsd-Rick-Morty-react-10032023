import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const BarraNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Rick and Morty</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#features">Character</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">Register</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">Login</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

