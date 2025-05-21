import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
 function Test (){
    // const [demo,setDemo]= useState("test");
    const [nano,setNano]=useState(0);
    // useEffect( ()=>
    // {
    //     setTimeout(() => {
    //         setNano((nano)=> nano + 1);

            
    //     }); 
    // }
    // )
    return (
        <>
        <Container>
            <Row>
                <Col>
                <h1>This Is Counter {nano}</h1>
                <Button onClick={()=>setNano((nano)=> nano + 1) }>+1</Button>
                <Button onClick={()=>setNano((nano)=> nano - 1) }>-
                    
                    1</Button>
                </Col>
            </Row>


            
        </Container>
        </>

    )
 }
 export default Test;