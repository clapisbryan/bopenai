import React from 'react'

const Sidebar = () => {
    return (
        <>
            <section className="side-bar border border-light p-3 rounded-4">
                <button className="btn btn-outline-light rounded-3 w-100">+ New Chat</button>
                <ul className="history"></ul>
            </section>
        </>
    )
}

export default Sidebar
