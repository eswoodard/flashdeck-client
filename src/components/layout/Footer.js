import React from 'react';
import './Footer.css';

const Footer = () =>  {
    return (
       <footer>
            <p className="credit">Created by: Elizabeth Woodard</p>
            <a href="https://github.com/eswoodard"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/elizabeth-woodard-92706214/"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto: eswoodard75@gmail.com"><i className="far fa-envelope"></i></a>
        </footer>
    )
}

export default Footer;