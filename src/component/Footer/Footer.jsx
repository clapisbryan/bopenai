import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer>
            <div className="container text-center">
                <p>&copy; {currentYear} bopenAI Project. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
