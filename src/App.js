import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <Navbar bg="light" variant="light" className='shadow-sm'>
      <Container className='m-auto'>
        <Navbar.Brand href="#home">Meraki <strong>UI</strong></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">

          <Nav className='me-auto w-100 d-flex justify-content-end'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Blog</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default App;
