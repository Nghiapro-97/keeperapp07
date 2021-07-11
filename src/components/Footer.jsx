import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='text-center'>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
    );
}

export default Footer;