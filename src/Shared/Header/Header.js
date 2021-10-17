import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div >
            <div className="banner d-flex flex-column justify-content-center align-items-center">
                <h1>Best Food Waiting For Your Belly</h1>
                <div className="bg-light search-box">
                <input  type="search" placeholder="Search Food Items"/>
                <Button className=" bg-danger px-3">Search</Button>
                </div>
            </div>
            <div className="food-page d-flex justify-content-center my-3">
                <Link to="/breakfast">Breakfast</Link>
                <Link to="/lunch">Lunch</Link>
                <Link to="/dinner">Dinner</Link>
            </div>
        </div>
    );
};

export default Header;