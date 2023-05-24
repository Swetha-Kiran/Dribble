import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="https://dribbble.com/">dribble</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shots">Inspiration</Nav.Link>
            <Nav.Link href="/jobs">Find Work</Nav.Link>
            <Nav.Link href="/learn">Learn Design</Nav.Link>
            <Nav.Link href="/pro">Go Pro</Nav.Link>
            <Nav.Link href="/hiring">Hire Designers</Nav.Link>
            <SearchIcon />
             <Nav.Link href="/signin">Sign In</Nav.Link>
            <Button variant="danger" style={{backgroundColor:"#ea4c89"}}>Sign Up</Button>
           
          </Nav>
      

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;