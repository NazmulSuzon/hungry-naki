import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import icon from '../../images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';

const Navigationbar = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Container >
                    <Link to='/'>
                    <img style={{ width: "120px", height: "40px" }} src={icon} alt="" />
            </Link>
                    {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="user d-flex" >
                            <Link className="pe-4" to="/home">Home</Link>
                            {user?.email ?
                                <Button variant="light">Logout</Button>:
                                <Link className="pe-4" to="/login">Login</Link>
                            }
                            <Link className="rounded-pill bg-danger p-2 ms-2" to="/register">Register</Link>
                            <p className="ms-2">Signed in as: {user?.displayName}</p>
                            <Link className="ms-3"><FaShoppingCart /></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigationbar;