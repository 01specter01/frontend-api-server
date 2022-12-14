import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navi() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Filmbox</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="cards">
                            Fotos
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Navi;
