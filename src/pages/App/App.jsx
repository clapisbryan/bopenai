import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import { Header, Footer, About } from '../../component/index';

// Import pages
import Home from '../Home/Home';
import Chat from '../Chat/Chat';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
