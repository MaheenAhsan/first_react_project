import React from "react"
import { Navbar, Container } from "react-bootstrap"

;const Home = () => {
   return (
    <>
    <h1>Home</h1>
     <Navbar bg="info mb-3" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
</>
   )
}
export default Home;