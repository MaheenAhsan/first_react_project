import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Training = () => {

    const [fullName , setfullName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPasssword] = useState("");

    return(
   <>
  
   <Container style={{ height: "100vh" }}>
    <Row>
    <Col style={{ height: "100vh"}} className=" bg-info d-flex justify-content-center align-items-center" lg={12} sm={12}>
    <div style={{ width: "40%" }}>
           
        <h1>STUDENT LOGIN FORM</h1> 
          
         <div className="form-group mt-3">
            <label>ENTER YOUR FULLNAME</label>
            <input value={fullName}onChange={(event)=>{
            setfullName(event.target.value);
            }} className="form-control" type="text" />
        </div>

         <div className="form-group mt-3">
            <label>ENTER YOUR EMAIL</label>
            <input value={email}onChange={(event)=>{
                setEmail(event.target.value);
            }} className="form-control" type="email"/>
        </div> 

         <div className="form-group mt-3">
            <label>ENTER YOUR PASSWORD</label>
             <input value={password} onChange={(event) => {
                setPasssword(event.target.value)
            }} className="form-control" type="password" />
         </div>

            <div className=" form-group mt-5">
                <Button onClick={()=>{
                console.log(fullName);
                console.log(email);
                console.log(password);
                }} style={{ width: "100%" }} variant="btn btn-primary">LOGIN</Button>
            </div>
             
    </div>
    </Col>
    </Row>
  </Container>
     {/* <div>
      <Row style={{height:350}}>
        <Col className="bg-success d-flex justify-content-center align-items-center " lg={4} sm={12} >
          <h3>My store</h3>
          <p className="mt-3">This is first item</p>
        </Col>
      
        <Col className="bg-secondary position-relative" lg={4} sm={12} >
          <h3>My store</h3>
          <p>This is second item</p>
          <button className="btn btn-light position-absolute " style={{ top: 7, right: 7}}>Click me</button>
        </Col>
      
        <Col className="bg-primary" lg={4} sm={12}>
          <h3>My store</h3> 
          <p>This is third item</p>
        </Col> 
      </Row>
  </div> */}
 {/* <div className="bg-info" style={{height:350 , overflowX:"auto"}}>

 </div>  */}

    {/* <div className="bg-primary" style={{height:300}}></div>
        <div className="bg-danger" style={{position:"fixed", height:100,width:100,borderRadius:"100%",bottom:10,right:"10%"}}></div>
        <div className="bg-info" style={{height:300}}></div>
        <div className="bg-warning" style={{height:300}}></div>
        <div className="bg-success" style={{height:300}}></div>   */}

        {/* <div style={{height:"100vh"}} className=" bg-info d-flex justify-content-center align-items-center">
            <h1>HELLO WORLD</h1>
            <p>THIS IS PARAGRAPH</p>
        </div>

         {/* <Row>
            <Col className="d-flex" lg={6} sm={12}>
                <h1>HELLO WORLD</h1>
                <p>THIS IS PARAGRAPH</p>
            </Col>
            <Col className="d-flex" lg={6} sm={12}>
                <h1>HELLO WORLD</h1>
                <p>THIS IS PARAGRAPH</p>
            </Col>
        </Row> */}
{/*   
    <Row className="p-5" style={{ height: 400, backgroundColor: "red" }}>
            <Col lg={6} sm={12}>
                <h1>HEADING</h1>
            </Col>
            <Col lg={6} sm={12}>
                <p style={{height:400,overflow:"scroll"}}>this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.</p>
            </Col>

            <p>this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.</p>
        </Row>  */}



</>
  );
};

export default Training;
