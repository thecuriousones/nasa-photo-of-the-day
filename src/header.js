import React from 'react'

function Header (props) {
    const {data} = props;
    
    return (
        <div className="Header">
            <h1>{data.title}</h1>
            <h2>Date: {data.date}</h2>
        </div>
    );
};

export default Header