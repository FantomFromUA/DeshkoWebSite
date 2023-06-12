import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaGoogle,
    FaHome,
    FaQuestion
} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className="bg-dark text-center text-white" style={{ width: "100vw" }}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <Link className="btn btn-outline-light btn-floating m-1" to="https://www.instagram.com/deshkulio/" role="button">
                        <FaInstagram />
                    </Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="/" role="button">
                        <FaHome />
                    </Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="/about" role="button">
                        <FaQuestion />
                    </Link>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "grey" }}>
                © 2023 My Custom ANIME-LIST
            </div>
        </div>
    );
}

export default Footer;