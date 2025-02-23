import React from 'react';
import Sidebar from './Sidebar';

const Chat = () => {
    return (
        <div className="">
            <div className="container h-100">
                <div className="mb-3 mb-lg-5">
                    <h2>Chat with bopenAI</h2>
                    <p>
                        Start your conversation with bopenAI. Ask anything, and the AI will respond
                        with intelligent and relevant answers. This chat page allows you to engage
                        with the cutting-edge AI model designed for real-time conversations.
                    </p>
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Chat;
