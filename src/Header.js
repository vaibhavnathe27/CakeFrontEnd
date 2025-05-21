import React from "react";
import Cakeshop from './cakeshop.webp';
import Instalg from './instagram.jpg';
import Fblg from './fblogo.png';
import Twtlg from './twitlogo.png';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import './Cake.css';


function header (){
    return(
        <>
         <Container fluid className="d-flex" > 
            <Row className="d-flex justify-content-between">

                <Col>
                <div className="iglg" >
                <img src={Fblg} />
                <img src={Instalg}/>
                <img src={Twtlg}/></div>
                </Col>
             
                <Col>
        <img src={Cakeshop} className="Cakeshop" />
        </Col>
        <Col>
        <Button variant="outline-warning" className="call">Call Us:+10 783 346 4378</Button>
        </Col>
        </Row>
        </Container > 
        <Nav className=" justify-content-center mt-3 " >
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} as={NavLink} to='/Home' >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} >Cakes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} >About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} as={NavLink} to='/Blogs'   >
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} as={NavLink} to='/Contact' >Contact</Nav.Link>
        </Nav.Item>
      </Nav>
        
        
        </>


    );
}
export default header;



