import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import './Cake.css';
import Button from 'react-bootstrap/Button';
import loc from './location.svg';
import con from './contact.svg';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Cakeshop from './cakeshop.webp';
import Nav from 'react-bootstrap/Nav';
import { IoHomeOutline } from "react-icons/io5";
import axios from 'axios'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollno, setRollno] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const miniproject = {
      name: name,
      email: email,
      password: password,
      rollno: rollno,
    };

    axios.post("http://localhost:8000/student", miniproject)
      .then(res => {
        console.log("Success", res.data);
        setName("");
        setEmail("");
        setPassword("");
        setRollno("");
      })
      .catch(err => {
        console.log("Error:", err);
      });
  };

  return (
    <>
      <Container fluid>
        <h1 style={{ color: '#fff', fontFamily: "Poiret One", margin: '100px' }}>Contact Us</h1>
        <div className="Contact">
          <Container>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26817478132!2d73.72107889570377!3d19.991105339888446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1741331287821!5m2!1sen!2sin" 
              width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Row>
              <h4 style={{ color: '#dfdfdf', marginTop: '70px' }}>Get in Touch</h4>
              <Col lg={8}>
                <Form.Control as="textarea" rows={8} placeholder="Enter Message" value={name} onChange={(e) => setName(e.target.value)} required style={{ background: '#000', color: '#fff', border: '1px solid #fff', borderRadius: '0px' }} />
              </Col>
              <Col lg={4}>
                <ul>
                  <li>
                    <IoHomeOutline style={{ color: '#fff', fontSize: '30px', position: 'relative', top: '24px', left: '35px' }} />
                    <h5> Buttonwood, California.</h5>
                    <p>Rosemead, CA 91770</p>
                  </li>
                  <li>
                    <h5>+1 253 565 2365</h5>
                    <p>Mon to Fri 9am to 6pm</p>
                  </li>
                  <li>
                    <h5>support@colorlib.com</h5>
                    <p>Send us your query anytime!</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg={8}>
                <Form onSubmit={submit}>
                  <Row>
                    <Col>
                      <Form.Control placeholder="Enter Name" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ background: '#000', borderRadius: '0px', color: '#fff' }} />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Email" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ background: '#000', borderRadius: '0px' , color: '#fff'}} />
                    </Col>
                  </Row>
                  <br />
                  <Form.Control placeholder="Enter Subject" value={rollno} onChange={(e) => setRollno(e.target.value)} required style={{ background: '#000', borderRadius: '0px', color: '#fff' }} />
                  <br />
                  <Button type="submit">SEND</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>

      <div className="Confooter">
        <Container>
          <Row>
            <Col><img src={Cakeshop} alt="Cake Shop" /></Col>
            <Col>
              <Container>
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="Cfoo" style={{ color: '#fff', position: 'relative', top: '220px' }}>HOME</Nav.Link>
                  <Nav.Link href="#features" className="Cfoo" style={{ color: '#fff', position: 'relative', top: '220px' }}>CAKES</Nav.Link>
                  <Nav.Link href="#pricing" className="Cfoo" style={{ color: '#fff', position: 'relative', top: '220px' }}>ABOUT</Nav.Link>
                  <Nav.Link href="#pricing" className="Cfoo" style={{ color: '#fff', position: 'relative', top: '220px' }}>BLOG</Nav.Link>
                  <Nav.Link href="#pricing" className="Cfoo" style={{ color: '#fff', position: 'relative', top: '220px' }}>CONTACT</Nav.Link>
                </Nav>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.</p>
              <Button variant="outline-light"><FaInstagram /> Instagram</Button>
              <Button variant="outline-light"><FaFacebook /> Facebook</Button>
              <Button variant="outline-light"><CiTwitter /> Twitter</Button>
            </Col>
            <Col lg={3}>
              <img src={loc} alt="Location" />
              <h3>Location</h3>
              <h5>4736 Poe Lane, HOT SPRINGS, Montana-59845</h5>
            </Col>
            <Col lg={3}>
              <img src={con} alt="Contact" />
              <h3>Contact</h3>
              <h5>913-473-7000 <br /> contact@cakeshop.com</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
