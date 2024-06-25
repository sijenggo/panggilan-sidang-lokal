import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

const Home = () =>{
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSelect = (eventKey, event) => {
        event.preventDefault();
        console.log(`Selected ${eventKey}`);
    };

    return(
        <div>
			<div className="limiter">
				<div className="background-container">
                    <Offcanvas show={show} scroll backdrop={false} className="d-flex flex-nowrap" style={{ width: '280px'}}>
                        <Offcanvas.Body className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                            <Navbar className="bg-body-tertiary">
                                <Container>
                                    <Navbar.Brand href="#home">
                                        <i className="fa-solid fa-house-user fa-bounce me-2"></i>
                                        Apaansi
                                    </Navbar.Brand>
                                    <Navbar.Brand href="" onClick={handleClose}>
                                        <i className="fa-solid fa-bars"></i>
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                            <hr />
                            <Nav variant="pills" defaultActiveKey="/home" className="flex-column mb-auto">
                                <Nav.Item>
                                    <Nav.Link href="/home" eventKey="/home" onClick={(e) => handleSelect("/home", e)}>
                                        Beranda
                                    </Nav.Link>
                                    <Nav.Link eventKey="link-1" onClick={(e) => handleSelect("link-1", e)}>
                                        NavLink 1 content
                                    </Nav.Link>
                                    <Nav.Link eventKey="link-2" onClick={(e) => handleSelect("link-2", e)}>
                                        NavLink 2 content
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <hr />
                            <div className="dropdown">                                
                                <Nav className='text-black fw-bold'>
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2 my-auto" />
                                    <NavDropdown title="mdo"  id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.1">Keluar</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
            </div>
        </div>
    )
}

export default Home;