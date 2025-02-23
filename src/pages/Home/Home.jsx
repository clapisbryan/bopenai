import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="custom-height">
            <div className="container h-100">
                <div className="d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <h1>Welcome to bopenAI</h1>
                            <p>
                                bopenAI is your intelligent assistant powered by advanced AI technology.
                                Get answers to your questions, explore new ideas, or simply engage in an
                                interesting conversation with bopenAI.
                            </p>
                            <p>
                                <strong>Start chatting now and experience the future of AI!</strong>
                            </p>

                            <Link to="/chat" className="btn btn-md btn-light rounded-3">Try it now</Link>
                        </div>
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
