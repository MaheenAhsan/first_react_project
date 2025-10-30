import { useState } from "react";
import { Container,Row , Col , Button } from "react-bootstrap";

const Product = ()=> {

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
  </>
 )  
}
export default Product;