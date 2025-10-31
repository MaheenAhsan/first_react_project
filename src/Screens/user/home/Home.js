import React from "react"
import { Navbar, Container } from "react-bootstrap"

;const Home = () => {
   return (
    <>
     <p>this is my contact file</p>
     <Navbar bg="info mb-3" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
      <h1>my navbar heading</h1>
</>
   )
}
export default Home;