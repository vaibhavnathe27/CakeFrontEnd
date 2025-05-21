import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Bloggg from "./bloggg.webp"
import Row from "react-bootstrap/esm/Row";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';




function Blogs() {
    return(
        <>
        <h1 style={{color:'#fff',fontFamily: "Poiret One",margin:'50px'}}>Blog</h1>
        <Container>
            <Row>
                <Col lg={8}>
                <Card style={{borderRadius:'0px',borderColor:'#000',boxShadow:'revert'}}>
        <Card.Img variant="top" src={Bloggg} />
        {/* <Button type="button">15 <br/>Jan</Button> */}
        <Card.Body>
          <Card.Text>
            <h2 style={{color:'#dfdfdf',fontFamily: "Poiret One"}}>Google inks pact for new 35-storey office</h2>
            <p style={{color:'#dfdfdf',fontFamily: "Poiret One",fontSize:'20px'}}>That dominion stars lights dominion divide years for fourth have don't stars is that
                he earth it first without heaven in place seed it second morning saying.</p>          
                </Card.Text>
        </Card.Body>
      </Card>

                
                </Col>
                <Col lg={4}>
                <Form className="d-flex" style={{borderWidth:'1 20px',borderColor:'#fff'}}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me"
                    aria-label="Search"
                    style={{borderRadius:'0px'}}/>
                  <Button variant="warning"  style={{borderRadius:'0px',color:'#fff',background:'#E5BF4A'}}>Search</Button>
                </Form>        
                </Col>
            </Row>
        </Container>
        
        </>

    )
}
export default Blogs;