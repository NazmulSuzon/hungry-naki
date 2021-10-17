import React from 'react';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <div className="text-light bg-dark">
            {/* const element = <FontAwesomeIcon icon={copyright} /> */}
            <div className=" py-4 px-5 my-5 d-flex justify-content-between">
                <div>
                    <img style={{ width: "120px", height: "40px" }} src={logo} alt="" />
                </div>
                <div className="text-light ">
                    <div className="d-flex justify-content-between pe-5">
                        <div>
                            <ul>
                                <ol>About</ol>
                                <ol>Read</ol>
                                <ol>Register</ol>
                                <ol>Restaurent</ol>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <ol>Help</ol>
                                <ol>Panel</ol>
                                <ol>View</ol>
                                <ol>Participate</ol>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-5 d-flex justify-content-between">
                <div >
                    <p>Copyright  <FontAwesomeIcon icon={faCopyright} /> 2021 Online Food</p>
                </div>
                <div className="d-flex justify-content-around">
                    <div>
                    <p>Privacy Policy</p>
                    </div>
                    <div><p className="ps-4">Terms Of Use</p></div>
                    <div><p className="ps-4">Pricing</p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;