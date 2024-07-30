import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./App2.css";


function Home() {
  return (
    <div>
        <Navbar expand="lg"  id="navbar">
            <Container>
                <Navbar.Brand href="#home" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>Online Food Delivery System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    
                    <Nav.Link href="/Home" color='white' style={{fontSize:"15px",textDecoration:"none",color:"white"}}>Home</Nav.Link>
                        <Nav.Link href="/Viewconsumer" style={{fontSize:"15px",textDecoration:"none",color:"white"}}>View Consumer</Nav.Link>
                        <Nav.Link href="/View" style={{fontSize:"15px",textDecoration:"none",color:"white"}}>View Bill</Nav.Link>
                        <Nav.Link href="/AddEmp" style={{fontSize:"15px",textDecoration:"none",color:"white"}}>Add Consumer</Nav.Link>
                        <Nav.Link href="/create" style={{fontSize:"15px",textDecoration:"none",color:"white"}}>Add Bill</Nav.Link>
                        <Nav.Link href="#link" style={{fontSize:"15px",textDecoration:"none",color:"white"}}></Nav.Link>
                       
                        <NavDropdown title="Options" id="basic-nav-dropdown" style={{fontSize:"20px",textDecoration:"none",color:"white"}}>
                            <NavDropdown.Item href="#action/3.1"><Link to="/Viewconsumer">Consumer</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><Link to="/View">Bill</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"><Link to="/Login">LOG OUT</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div class="text-block">
    <h4 style={{fontSize:"20px",textDecoration:"none"}}>This is Food Delivery System</h4>
    <p style={{fontSize:"20px",textDecoration:"none", color:"yellow"}}>Manage your orders here</p>
    <button><Nav.Link href="/Viewconsumer" style={{fontSize:"20px",textDecoration:"none"}}>Get Started</Nav.Link>
</button>
</div>

<div class="about-section">
  <h1>About Us</h1>
  <p>This is Food Delivery System.</p>
  <p>We assist our delivery partners to feast you on time.</p>
</div>
</div>

 

  


        
      

    
    
  )
}

export default Home

 
