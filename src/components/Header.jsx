import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar>
        <Container>
          <Navbar.Brand className='fw-bolder text-light'>
            <Link to={'/'} style={{textDecoration:'none',fontWeight:'800'}}>
                <i class="fa-solid fa-layer-group fa-flip me-2"></i>
                EMS APPLICATION
            </Link>
           
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header