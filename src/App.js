import React from 'react';
import Image from "react-bootstrap/Image";
import Explorers from './Explorers.PNG';
import ExplorerHome from './ExplorerHome.png';
import tree from './tree.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from 'react-bootstrap/Placeholder'
import {Navbar, Nav, Container, Row, Col, Button} from 'react-bootstrap'

console.log(Explorers);
console.log(ExplorerHome);
console.log(tree);

function App() {
  return (

// Header with logo 
    <div className="App">
      <header className="App-header">
          <div style={{ display: "flex" ,width: 300, alignItems:'center'}}>
            <Image src="./Explorers.PNG" fluid/>
          </div>
      </header>
      
    
{/* Collapsible navigation bar  */} 
      <div className="color-nav" style={{display: "flex", alignItems:'center'}}>
        <Navbar variant="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="./Home">Home</Nav.Link>
                  <Nav.Link href="./About">About</Nav.Link>
                  <Nav.Link href="#link">Find a Group</Nav.Link>
                  <Nav.Link href="#link">Become a Host</Nav.Link>
                  <Nav.Link href="#link">Login</Nav.Link>
                  <Nav.Link href="#link">Signup</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>

{/* Intro section of page */} 
      <Container fluid>
          <Row style={{ height: "50px" }}></Row>
          <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
            <Col>
              <div style={{ display: "flex" , alignItems:'center'}}>
                <Image src="./ExplorerHome.png" fluid/>
              </div>
            </Col>
            
            <Col>
              <h3>
                Ready to get out and explore the world around you with your little one?
              </h3>
                <p>
                  Getting out into nature can happen at anytime, but having a group to get out and explore together can be so much fun. 
                  Teeny Tiny Explorers is focused on creating communities to come together and explorer the outdoors with one another. 
                  There are so many local groups you can find to meet up, but having a group dedicated to nature play is hard to find. 
                  Teeny Tiny Explorers wanted to bridge that gap between parents looking to meet other parents but also find others that 
                  love exploring outside with their little ones.
                </p>
                <Button variant="light">Learn More</Button> 
            </Col>
          </Row>
        <Row style={{ height: "20px" }}></Row>



{/* find a group / become a host section */} 
          <Row style={{ alignItems:'center'}}>
          <Col>
            <h3>
                Ready to find a local Teeny Tiny Explorers Group?
              </h3>
                <p>
                  ed, and wish to host a local group, please see the "Host a Local Group" section.
                </p>
                <div style={{alignItems:'center'}}>
                  <Button className="color-nav" >Find a Group</Button> 
                  <Button >Become a Host</Button> 
                </div>
            </Col>
            <Col>
              <Image src="./tree.png" fluid/>
            </Col>
          </Row>
          <Row style={{ height: "50px" }}></Row>
      

        <footer className="color-nav" style={{ alignItems:'center', padding: "5px"}}>
            © Teeny Tiny Explorers 2021
        </footer>

  </Container>

      
    </div>
  );
}

export default App;
