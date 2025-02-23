import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark border-body py-3 py-lg-4" data-bs-theme="dark">
                <div class="container">
                    <Link to="/" className="navbar-brand">BopenAI</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2 gap-md-3">
                            <li class="nav-item">
                                <Link to="/" className="btn btn-md btn-outline-light rounded-3">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/chat" className="btn btn-md btn-outline-light rounded-3">Chat</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="btn btn-md btn-outline-light rounded-3">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
