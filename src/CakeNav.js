import React from "react";
import Cakeshop from './cakeshop.webp';
import Instalg from './instagram.jpg';
import bg from './background1.jpg';
import Fblg from './fblogo.png';
import Twtlg from './twitlogo.png';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import './Cake.css';
import Cake3 from './thirdcake.webp';
import Sl1 from './slidercake1.webp';
import Sl2 from './slidercake2.webp';
import Sl3 from './slidercake3.webp';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { IconName } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import Blog from './blog1.webp';
import Blog1 from './blog2.jpg.webp';
import grid1 from './cakegrid1.webp';
import grid2 from './cakegrid2.webp';
import grid3 from './cakegrid3.webp';
import grid4 from './cakegrid4.webp';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import loc from './location.svg';
import con from './contact.svg'








function CakeN(){
    return(
        <>
        <Container fluid>
        {/* <Container fluid className="d-flex" > 
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
          <Nav.Link style={{color:"#fff",fontSize:"18px",}}  >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} >Cakes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} >About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}}   >
            Blog
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"#fff",fontSize:"18px",}} >Contact</Nav.Link>
        </Nav.Item>
      </Nav> */}
      <Container fluid>
        <div className="sec1">
        <img src={bg} className="bg  " />
        <Button variant="outline-warning" className="Order">ORDER NOW</Button>
         </div>
      </Container>
       <Container>
        <div className="sec2">
         <h1>This is Schilers. Awesome Food Theme. <br/> Purchase it and eat Burgers.</h1>
            <h5>This is Schilers. Awesome Food Theme. <br/> Purchase it and eat Burgers.</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute dolor in reprehen derit in voluptate velit esse cillum. <br/> Consectetur adipiscing
        elit,
        sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit in voluptate velit
        esse cillum.  </p>
        <img src={Cake3}/>


        </div>
      </Container>
      <div className="Slide">
      <Container>
        <Row>
          <Col lg={4}>
          <img src={Sl1}/>
          </Col>
          <Col  lg={4}>
          <img src={Sl2}/>
          </Col>
          <Col  lg={4}>
          <img src={Sl3}/>
          </Col>
        </Row>
      </Container>
      </div>
      <div class="video">
    <iframe width="1280px" height="600px" src="https://www.youtube.com/embed/up68UAfH0d0?si=938L3dRMSZ-3Cimk"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  <div className="Review">
    <Container>
    <h1>Food Lover's Say</h1>
    <CardGroup className="cd">

      <Card > 
        <Card.Body style={{color:"#fff"}}>
          <Card.Title><CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
          </Card.Title>
          <Card.Text >
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et
          dolore magna.
          </Card.Text>
          <small>Wilma Mumdya</small>

        </Card.Body>
      </Card>                                  
      <Card>
        <Card.Body style={{color:"#fff"}}>
          <Card.Title><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></Card.Title>
          <Card.Text>
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et
          dolore magna.
          </Card.Text>
          <small>Wilma Mumdya</small>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={{color:"#fff"}}>
          <Card.Title><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></Card.Title>
          <Card.Text>
          "Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et
          dolore magna.
          </Card.Text>
          <small>Wilma Mumdya</small>

        </Card.Body>
      </Card>
    </CardGroup>
    </Container>
    </div> 
    <div className="blog"  >
      <Container>

      <h3>Our Blogs</h3>
      <button type="button">MORE BLOG</button>
      </Container>
    </div>
    <div className="blog1">
      <Container fluid>
        <Row>
          <Col lg={3}>
          <img src={Blog}/>
          </Col>
          <Col lg={3}>
          <h3 > Tomato, black olive, feta &amp; anchovy tart ulla mco laboris</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
          <button type="button " class="btn ">LEARN MORE</button>
          </Col>
          <Col lg={3}>
          <img src={Blog1}/>
          </Col>
          <Col lg={3}>
          <h3 > Tomato, black olive, feta &amp; anchovy tart ulla mco laboris</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip.</p>
          <button type="button " class="btn ">LEARN MORE</button>
          </Col>


        </Row>
      </Container>
    </div>
    <div className="insta">
      <Container>
      <h1>Follow us on Instagram</h1>
    <button type="button" class="btn btn-outline-warning"> <FaInstagram /> Cakeshop</button>
    <Row>
      <Col lg={3}>
      <img src={grid1}/>
      </Col>
      <Col lg={3}>
      <img src={grid2}/>
      </Col>
      <Col lg={3}>
      <img src={grid3}/>
      </Col>
      <Col lg={3}>
      <img src={grid4}/>
      </Col>
    </Row>

      </Container>
    </div>
    <div className="footer">
      <Container>
        <Row>
          <Col>
          <img src={Cakeshop}/>
          </Col>
          <Col>
          <Container>
          <Nav className="me-auto" >
            <Nav.Link href="" className="foo" style={{color:'#fff',}}as={NavLink} to='/Home' >HOME</Nav.Link>
            <Nav.Link href="#features" className="foo" style={{color:'#fff',}}>CAKES</Nav.Link>
            <Nav.Link href="#pricing" className="foo" style={{color:'#fff',}}>ABOUT</Nav.Link>
            <Nav.Link href="#pricing" className="foo" style={{color:'#fff',}} as={NavLink} to='/Blogs'>BLOG</Nav.Link>
            <Nav.Link href="#pricing" className="foo" style={{color:'#fff',}}as={NavLink} to='/Contact' >CONTACT</Nav.Link>
          </Nav>
        </Container>
          </Col>
          <hr style={{position:'relative',color:'#fff',top:'2430px',left:'20px'}}/>
        </Row>
        <Row>
          <Col lg={6}>
          <p>
          Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button type="button" class="btn btn-outline-light"><FaInstagram /> Instagram</button>
            <button type="button" class="btn btn-outline-light "> <FaFacebook /> Facebook</button>
            <button type="button" class="btn btn-outline-light "> <CiTwitter /> Twitter</button>
          </Col>
          <Col lg={3}>
          <img src={loc} style={{position:'relative',top:'2450px',left:'130px'}}/>
          <h3>Location</h3>
          <h5>4736  Poe Lane, HOT <br/>s SPRINGS, Montana-59845</h5>
          </Col>
          <Col lg={3}>
          <img src={con} style={{position:'relative',top:'2450px',left:'130px'}} />
          <h3>Contact</h3>
          <h5>913-473-7000 <br/>
          contact@cakeshop.com</h5>
          </Col>
          <hr style={{position:'relative',color:'#fff',top:'2550px',left:'20px'}}/>

        </Row>
      </Container>
                                                                                                                     



                                                                                                                              
    </div>    
    </Container>      
     
        </>


    );
}
export default CakeN;