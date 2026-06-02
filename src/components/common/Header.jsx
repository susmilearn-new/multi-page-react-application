import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/" className='primary-text fw-bold'>UserPortal</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav className="gap-4">
                                <Link to="/">Home</Link>
                                <Link to="about">About</Link>
                                <Link to="users">Users</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </>
    )
}
export default Header