import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../resources/spacex-brand.png';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{paddingBottom: 0, paddingTop: 0}}>
            <Container>
                <Navbar.Brand href="#home">
                    <img className="navbar-brand" src={Logo} alt="spacex-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Landing</Nav.Link>
                        <Nav.Link href="/missions">Missions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;