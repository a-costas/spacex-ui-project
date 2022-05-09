import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="footer">
            SPACEX © {year}
        </div>
    );
}

export default Footer;